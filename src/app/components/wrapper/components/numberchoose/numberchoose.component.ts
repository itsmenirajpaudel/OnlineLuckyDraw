import { Component, OnInit } from "@angular/core";
import { GlobalEvents } from "../../../../helpers/globalevents";
import { Router } from "@angular/router";

@Component({
  selector: "number-choose",
  templateUrl: "./numberchoose.component.html",
  styles: [
    `
      #one ul.numbers-list li {
        cursor: pointer;
      }
    `
  ]
})
export class NumberChooseComponent implements OnInit {
  numbers: any = [];
  selectedNumberCommaSeparated = "";
  selectedNumber: any = [];
  constructor(private globalEvents: GlobalEvents, private router: Router) {}

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.numbers.push(i);
    }
  }

  goToDetails() {
    this.router.navigate(["/details"]);
    this.globalEvents.menuBarEvent.emit("details");
  }

  isDisabled(number) {
    return (
      this.selectedNumber.includes(number) || this.selectedNumber.length >= 4
    );
  }

  selectNumber(number) {
    if (!this.selectedNumber.includes(number)) {
      this.selectedNumber.push(number);
      this.selectedNumber.sort((a, b) => a - b);
      this.selectedNumberCommaSeparated = this.selectedNumber.join(", ");
    }
  }

  resetNumbers() {
    this.selectedNumber = [];
    this.selectedNumberCommaSeparated = "";
  }
}
