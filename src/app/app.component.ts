import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MetaService } from "./services/meta.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "hustle-timer";
  constructor(public router: Router, private _meta: MetaService) {}
}
