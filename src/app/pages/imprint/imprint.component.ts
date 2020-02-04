import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-imprint",
  templateUrl: "./imprint.component.html",
  styleUrls: ["./imprint.component.scss"]
})
export class ImprintComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const goToPrivacy = this.router.url === "/privacy";
    if (goToPrivacy) {
      document.getElementById("privacy").scrollIntoView({ behavior: "smooth" });
    }
  }
}
