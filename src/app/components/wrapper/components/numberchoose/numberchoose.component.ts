import { Component } from "@angular/core";
import { GlobalEvents } from "../../../../helpers/globalevents";
import { Router } from "@angular/router";

@Component({
  selector: "number-choose",
  templateUrl: "./numberchoose.component.html",
  styles: []
})
export class NumberChooseComponent {
  constructor(private globalEvents: GlobalEvents, private router: Router) {}

  goToDetails() {
    this.router.navigate(["/details"]);
    this.globalEvents.menuBarEvent.emit("details");
  }
}
