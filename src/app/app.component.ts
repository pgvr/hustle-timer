import { Component, AfterViewInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { MetaService } from "./services/meta.service";
import { environment } from "src/environments/environment";

declare var gtag;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  constructor(public router: Router, private _meta: MetaService) {}

  ngAfterViewInit() {
    if (environment.production) {
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://www.googletagmanager.com/gtag/js?id=" + environment.code;
      document.head.prepend(script);
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          gtag("config", "UA-100079341-6", {
            page_path: event.urlAfterRedirects
          });
        }
      });
    }
  }
}
