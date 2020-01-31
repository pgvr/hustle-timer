import { Injectable } from "@angular/core";

const WORK_MIN = 0.5;
const SHORT_BREAK_MIN = 0.1;
const LONG_BREAK_MIN = 0.2;

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
    this.time = WORK_MIN * 60;
    this.running = false;
    this.remainingPomos = 4;
    this.status = "ready, set";
  }

  public start(): void {
    this.running = true;
    if (this.status === "ready, set") {
      // play start sound
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
    this.time = WORK_MIN * 60;
    this.running = false;
    this.remainingPomos = 4;
    this.status = "ready, set";
  }

  private switchModes(): void {
    if (this.status === "hustle") {
      // play finish sound
      this.status = "relax";
      this.remainingPomos--;
      this.takeBreak();
    } else if (this.status === "relax") {
      // play start sound
      this.status = "hustle";
      this.time = WORK_MIN * 60;
      if (this.remainingPomos === 0) {
        this.remainingPomos = 4;
      }
    }
  }

  private takeBreak(): void {
    if (this.remainingPomos === 0) {
      this.time = LONG_BREAK_MIN * 60;
    } else {
      this.time = SHORT_BREAK_MIN * 60;
    }
  }
}
