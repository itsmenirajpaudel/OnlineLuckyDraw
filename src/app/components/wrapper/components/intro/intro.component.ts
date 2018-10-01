import { Component } from "@angular/core";
import { GlobalEvents } from "../../../../helpers/globalevents";
import { Router } from "@angular/router";

@Component({
  selector: "intro",
  templateUrl: "./intro.component.html",
  styles: []
})
export class IntroComponent {
  constructor(private globalEvents: GlobalEvents, private router: Router) {}

  goToNumberChoose() {
    this.router.navigate(["/number"]);
    this.globalEvents.menuBarEvent.emit("number");
  }
}
