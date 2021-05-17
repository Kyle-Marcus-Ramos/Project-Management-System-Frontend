import { Component, OnInit, Input } from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-kanbanboard-dialog',
  templateUrl: './kanbanboard-dialog.component.html',
  styleUrls: ['./kanbanboard-dialog.component.css']
})
export class KanbanboardDialogComponent implements OnInit {





  constructor() {
    
   }
  ngOnInit(): void {
  }
  /*
  @Input() disabled: boolean;
  @Input() matDatepicker: boolean;
  @Input() max: null;
  validDates = {
    // "2018-01-01T08:00:00": true,
    // "2018-01-02T08:00:00": true
    "2018-11-22T07:00:00.000Z": true
  }

  events: string[] = [];
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
  myFilter = (d: Date): boolean => {
    console.log(d);
    // Using a JS Object as a lookup table of valid dates
    // Undefined will be falsy.
    return this.validDates[d.toISOString()];
  }*/


  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
}


