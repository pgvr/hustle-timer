import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class TimerService {
  public time: number;
  public running: boolean;
  public interval: any;
  public remainingPomos: number;
  public status: "ready, set" | "hustle" | "relax";

  constructor() {
    this.time = environment.workMins * 60;
    this.running = false;
    this.remainingPomos = 4;
    this.status = "ready, set";
  }

  public start(): void {
    this.running = true;
    if (this.status === "ready, set") {
      // play start sound
      this.playStartSound();
      this.status = "hustle";
    }
    this.interval = setInterval(() => {
      this.time--;
      if (this.time === 0) {
        this.switchModes();
      }
    }, 1000);
  }

  public pause(): void {
    this.running = false;
    clearInterval(this.interval);
  }

  public reset(): void {
    clearInterval(this.interval);
    this.time = environment.workMins * 60;
    this.running = false;
    this.remainingPomos = 4;
    this.status = "ready, set";
  }

  private playStartSound(): Promise<void> {
    const audio = new Audio("/assets/start.ogg");
    return audio.play();
  }

  private playFinishSound(): Promise<void> {
    const audio = new Audio("/assets/done.ogg");
    return audio.play();
  }

  private switchModes(): void {
    if (this.status === "hustle") {
      // play finish sound
      this.playFinishSound();
      this.status = "relax";
      this.remainingPomos--;
      this.takeBreak();
    } else if (this.status === "relax") {
      // play start sound
      this.playStartSound();
      this.status = "hustle";
      this.time = environment.workMins * 60;
      if (this.remainingPomos === 0) {
        this.remainingPomos = 4;
      }
    }
  }

  private takeBreak(): void {
    if (this.remainingPomos === 0) {
      this.time = environment.longBreakMins * 60;
    } else {
      this.time = environment.shortBreakMins * 60;
    }
  }
}
