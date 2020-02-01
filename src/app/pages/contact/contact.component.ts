import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  public name = "";
  public email = "";
  public message = "";
  constructor(private _http: HttpClient, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  public async sendMessage(event) {
    event.preventDefault();
    if (this.name && this.email && this.message) {
      console.log("send");
      const res = (await this._http
        .post("https://formspree.io/mayoqkyw", {
          name: this.name,
          _replyto: this.email,
          message: this.message
        })
        .toPromise()
        .catch(err => {
          console.log(err);
          // show error toast
          this._openSnackBar("Something went wrong", "Close");
        })) as { ok: boolean };
      if (res.ok) {
        // show ok toast
        this._openSnackBar("Message sent", "Close");
      }
      console.log(res);
    }
  }

  private _openSnackBar(message: string, action: string) {
    let ref = this._snackBar.open(message, action, {
      duration: 5000
    });
    ref.onAction().subscribe(() => {
      window.location.reload();
    });
  }
}
