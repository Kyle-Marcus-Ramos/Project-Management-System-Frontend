import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/components/models/board.model';
import { Column } from 'src/app/components/models/column.model';
@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent {
  title = 'ProjectManagementSystem';

  constructor(){

  }

  board: Board = new Board('Test Board', [
    new Column('TO DO', [
      "Todo",
      "Todo2",
    ]),
    new Column('IN PROGRESS', [
      "In progress",
      "In progress2",

    ]),
    new Column('COMPLETED', [
      'Done',
      'Done2',

    ]),
    new Column('FOR TESTING', [
      'Test',
      'Test2',
    ])
  ]);
  
  backgroundColors= [
    'orange',
    'black',
    'yellow',
    'white'
];
getColor(){
  if (this.board.columns.entries.name  == 'TO DO'){
    return 'black';
  }
  this.board.columns.entries.name 
  /*return this.board.columns. === "Test Board" ? 'black' : 'red'*/
}
/*
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  inprogress = [
    'test'
  ]


  completed = [
    'Get up',

  ];

  fortesting = [
    'test2'
  ]
*/
ngOnInit() {
}
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
