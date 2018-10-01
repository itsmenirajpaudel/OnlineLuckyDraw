import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class GlobalEvents {
  public menuBarEvent: EventEmitter<any> = new EventEmitter();
  constructor() {}
}
