// import { Component, OnInit, Input } from '@angular/core';

// import { FormGroup, FormControl } from '@angular/forms';


// @Component({
//   selector: 'app-kanbanboard-dialog',
//   templateUrl: './kanbanboard-dialog.component.html',
//   styleUrls: ['./kanbanboard-dialog.component.css']
// })
// export class KanbanboardDialogComponent implements OnInit {





//   constructor() {

//   }
//   ngOnInit(): void {
//   }
//   /*
//   @Input() disabled: boolean;
//   @Input() matDatepicker: boolean;
//   @Input() max: null;
//   validDates = {
//     // "2018-01-01T08:00:00": true,
//     // "2018-01-02T08:00:00": true
//     "2018-11-22T07:00:00.000Z": true
//   }
//   events: string[] = [];
//   addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
//     this.events.push(`${type}: ${event.value}`);
//   }
//   myFilter = (d: Date): boolean => {
//     console.log(d);
//     // Using a JS Object as a lookup table of valid dates
//     // Undefined will be falsy.
//     return this.validDates[d.toISOString()];
//   }*/


//   range = new FormGroup({
//     start: new FormControl(),
//     end: new FormControl()
//   });
// }





import { Component, OnInit, Input, Inject } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SaveKanbanRequestDTO } from '../model/api/kanban';
import { CardService } from '../service/api/card.service';


@Component({
  selector: 'app-kanbanboard-dialog',
  templateUrl: './kanbanboard-dialog.component.html',
  styleUrls: ['./kanbanboard-dialog.component.css'],
  providers: [CardService]

})
export class KanbanboardDialogComponent implements OnInit {

  public card: SaveKanbanRequestDTO;
  // public index: number;



  constructor(private _cardService: CardService,
    private router: Router,
    private dialogRef: MatDialogRef<KanbanboardDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any


  ) {

    // this.index = data.index;
  }
  ngOnInit(): void {
    this.card = new SaveKanbanRequestDTO();

  }

  save() {
    this.card.projectId = JSON.parse(sessionStorage.getItem("projectId"));

    // if (this.index === 0) {
    //   this.card.status = "TO DO";
    // }
    // else if (this.index === 1) {
    //   this.card.status = "IN PROGRESS";
    // }
    // else if (this.index === 2) {
    //   this.card.status = "COMPLETED";
    // }
    // else if (this.index === 3) {
    //   this.card.status = "FOR TESTING";
    // }

    console.log(this.card);
    this._cardService.SaveCard(this.card).subscribe((res) => {
      if (res !== null) {
        console.log(res);
        // this.router.navigateByUrl('/dashboard/dashboard');
      }
    })

  }


  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
}


