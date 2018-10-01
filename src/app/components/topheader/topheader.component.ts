import { Component, OnInit } from "@angular/core";
import { GlobalEvents } from "../../helpers/globalevents";

@Component({
  selector: "top-header",
  templateUrl: "./topheader.component.html",
  styleUrls: ["./topheader.component.css"]
})
export class TopHeaderComponent implements OnInit {
  activeRouterLink: any = {
    intro: ["/intro"],
    number: [],
    details: [],
    entryconfirmed: []
  };

  constructor(private globalEvents: GlobalEvents) {}

  ngOnInit() {
    this.globalEvents.menuBarEvent.subscribe(routeName => {
      this.activeRouterLink[routeName] = "/" + routeName;
    });
  }
}
