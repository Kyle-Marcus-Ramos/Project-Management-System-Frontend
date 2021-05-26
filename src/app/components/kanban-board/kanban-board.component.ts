// import { Component, NgModule, OnInit } from '@angular/core';
// import { List, ListInterface } from '../../../model/list/list.model';
// import { MovementIntf } from 'src/app/model/card/movement';
// import { BoardService } from '../../../service/board/board-service';
// import { BoardModel } from '../../../model/board/board.model';
// import { LocalService } from '../../../service/board/local/local.service';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { KanbanboardDialogComponent } from 'src/app/kanbanboard-dialog/kanbanboard-dialog.component';
// import { CardService } from 'src/app/service/api/card.service';
// import { SaveKanbanRequestDTO } from 'src/app/model/api/kanban';

import { Component, ViewChild, OnInit, ContentChildren, QueryList } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import clonedeep from 'lodash.clonedeep';
import { SaveKanbanRequestDTO } from 'src/app/model/api/kanban';
// import { LocalService } from 'src/app/board/local/local.service';
import { CardService } from 'src/app/service/api/card.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent {

  @ViewChild('table1') table1: MatTable<any>;
  @ViewChild('table2') table2: MatTable<any>;
  @ViewChild('table3') table3: MatTable<any>;
  @ViewChild('table4') table4: MatTable<any>;

  @ViewChild('list1') list1: CdkDropList;
  @ViewChild('list2') list2: CdkDropList;
  @ViewChild('list3') list3: CdkDropList;
  @ViewChild('list4') list4: CdkDropList;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  ELEMENT_DATA: PeriodicElement[];
  ELEMENT_DATA2: PeriodicElement[];
  ELEMENT_DATA3: PeriodicElement[];
  ELEMENT_DATA4: PeriodicElement[];
  dataSource;
  dataSource2;
  dataSource3;
  dataSource4;
  public card: SaveKanbanRequestDTO;

  constructor(
    // private localService:
    // LocalService,
    // public dialog: MatDialog,
    private _cardService: CardService,

  ) { }
  ngOnInit() {
    this.card = new SaveKanbanRequestDTO();

    this.card.projectId = JSON.parse(sessionStorage.getItem("projectId"));
    console.log(this.card.projectId);

    this._cardService.GetCards(this.card).subscribe((res) => {
      console.log("RESPONSE FOR BOARD COMPONENT: ")
      console.log(res);
      if (res !== null) {
        // this.lists = res;
      }
    })

    this.ELEMENT_DATA = [
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];

    this.ELEMENT_DATA2 = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    ];

    this.ELEMENT_DATA3 = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    ];

    this.ELEMENT_DATA4 = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    ];
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource2 = new MatTableDataSource(this.ELEMENT_DATA2);
    this.dataSource3 = new MatTableDataSource(this.ELEMENT_DATA3);
    this.dataSource4 = new MatTableDataSource(this.ELEMENT_DATA4);

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

    // updates moved data and table, but not dynamic if more dropzones
    this.dataSource.data = clonedeep(this.dataSource.data);
    this.dataSource2.data = clonedeep(this.dataSource2.data);
    this.dataSource3.data = clonedeep(this.dataSource3.data);
    this.dataSource4.data = clonedeep(this.dataSource4.data);

  }


  // public card: SaveKanbanRequestDTO;

  // lists: ListInterface[];

  // constructor(private localService:
  //   LocalService, public dialog: MatDialog,
  //   private _cardService: CardService,

  // ) { }



  // openDialog() {
  //   this.dialog.open(KanbanboardDialogComponent, {

  //   });
  // }

  // ngOnInit() {
  //   const board = this.localService.getBoard();
  //   this.card = new SaveKanbanRequestDTO();
  //   this.card.projectId = JSON.parse(sessionStorage.getItem("projectId"));
  //   console.log(this.card);
  //   this._cardService.GetCards(this.card).subscribe((res) => {
  //     console.log("RESPONSE FOR BOARD COMPONENT: ")
  //     console.log(res);
  //     if (res !== null) {
  //       this.lists = res;
  //     }
  //   })

  //   this.lists = board.lists;

  //   // ideally retrive and initialize from some storage.
  //   if (this.lists === undefined) {

  //     const newList1: ListInterface = new List();
  //     // newList1.position = 0;
  //     newList1.position = 0 + 1;

  //     newList1.name = `TO DO`;
  //     // console.log("To do supposedly" + newList1.name);


  //     if (this.lists === undefined) {
  //       this.lists = [];
  //     }

  //     this.lists.push(newList1);
  //     const newList2: ListInterface = new List();
  //     // newList2.position = 1;
  //     newList2.position = this.lists.length + 1;

  //     newList2.name = `IN PROGRESS`;
  //     if (this.lists == undefined) {
  //       this.lists = [];
  //     }
  //     this.lists.push(newList2);

  //     const newList3: ListInterface = new List();
  //     // newList3.position = 2;
  //     newList2.position = this.lists.length + 1;

  //     newList3.name = `COMPLETED`;
  //     if (this.lists === undefined) {
  //       this.lists = [];
  //     }
  //     this.lists.push(newList3);

  //     const newList4: ListInterface = new List();
  //     // newList4.position = 3;
  //     newList2.position = this.lists.length + 1;

  //     newList4.name = `FOR TESTING`;
  //     if (this.lists === undefined) {
  //       this.lists = [];
  //     }
  //     this.lists.push(newList4);
  //   }
  // }




  // moveCardAcrossList(movementInformation: MovementIntf) {
  //   const cardMoved = this.lists[movementInformation.fromListIdx].cards.splice(movementInformation.fromCardIdx, 1);
  //   this.lists[movementInformation.toListIdx].cards.splice(movementInformation.toCardIdx, 0, ...cardMoved);





  // }

  // saveBoard() {
  //   const boardModel = new BoardModel();
  //   boardModel.lists = this.lists;
  //   this.localService.saveBoard(boardModel);
  // }

  // deleteList(listIndex: number) {
  //   this.lists.splice(listIndex, 1);
  // }
}
