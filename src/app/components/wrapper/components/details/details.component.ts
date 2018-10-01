import { Component } from "@angular/core";
import { GlobalEvents } from "../../../../helpers/globalevents";
import { Router } from "@angular/router";

@Component({
  selector: "detail",
  templateUrl: "./details.component.html",
  styles: []
})
export class DetailsComponent {
  constructor(private globalEvents: GlobalEvents, private router: Router) {}

  goToConfirmPage() {
    this.router.navigate(["/entryconfirmed"]);
    this.globalEvents.menuBarEvent.emit("entryconfirmed");
  }
}
