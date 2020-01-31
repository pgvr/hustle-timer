import { Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class UpdateService {
  constructor(private swUpdate: SwUpdate, private _snackBar: MatSnackBar) {
    this.swUpdate.available.subscribe(evt => {
      // an update is available, add some logic here.
      this.openSnackBar("An update is available", "Reload");
    });
  }

  openSnackBar(message: string, action: string) {
    let ref = this._snackBar.open(message, action, {
      duration: 5000
    });
    ref.onAction().subscribe(() => {
      window.location.reload();
    });
  }
}
