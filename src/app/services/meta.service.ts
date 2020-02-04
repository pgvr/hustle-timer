import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Meta, Title } from "@angular/platform-browser";

const BASE_TITLE = "Hustle Timer, A Simple Pomodoro Timer App";

@Injectable({
  providedIn: "root"
})
export class MetaService {
  constructor(
    private _router: Router,
    private _meta: Meta,
    private _title: Title
  ) {
    _meta.updateTag({
      name: "description",
      content:
        "Hustle Timer is a simple Pomodoro Timer App to increase productivity and improve time management."
    });
    _router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // remove leading slash
        const url = event.url.substring(1);
        switch (url) {
          case "":
            this.setTimer();
            break;
          case "contact":
            this.setContact();
            break;
          case "about":
            this.setAbout();
            break;
          case "imprint":
            this.setImprint();
            break;
          case "privacy":
            this.setPrivacy();
            break;
          default:
            console.log("meta service default case");
            break;
        }
      }
    });
  }

  setTimer(): void {
    this._title.setTitle("Timer - " + BASE_TITLE);
  }

  setContact(): void {
    this._title.setTitle("Contact - " + BASE_TITLE);
  }
  setAbout(): void {
    this._title.setTitle("About - " + BASE_TITLE);
  }
  setImprint(): void {
    this._title.setTitle("Imprint - " + BASE_TITLE);
  }
  setPrivacy(): void {
    this._title.setTitle("Privacy - " + BASE_TITLE);
  }
}
