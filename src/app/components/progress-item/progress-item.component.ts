import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-progress-item",
  templateUrl: "./progress-item.component.html",
  styleUrls: ["./progress-item.component.scss"]
})
export class ProgressItemComponent implements OnInit {
  @Input() done: boolean;
  @Input() inProgress: boolean;

  constructor() {}

  ngOnInit(): void {}
}
