import { Component, OnInit } from "@angular/core";
import { TimerService } from "src/app/services/timer.service";
import { UpdateService } from "src/app/services/update.service";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.scss"]
})
export class TimerComponent implements OnInit {
  constructor(public timerService: TimerService) {}

  ngOnInit(): void {}

  public getMinutes(time: number): string {
    return Math.floor(time / 60) < 10
      ? "0" + Math.floor(time / 60)
      : "" + Math.floor(time / 60);
  }

  public getSeconds(time: number): string {
    return time % 60 < 10 ? "0" + (time % 60) : "" + (time % 60);
  }
}
