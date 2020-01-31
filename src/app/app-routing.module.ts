import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TimerComponent } from "./pages/timer/timer.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";

const routes: Routes = [
  {
    path: "",
    component: TimerComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
