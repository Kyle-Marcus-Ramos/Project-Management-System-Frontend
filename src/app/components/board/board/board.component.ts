import {Component, NgModule, OnInit} from '@angular/core';
import {List, ListInterface} from '../../../model/list/list.model';
import { MovementIntf } from 'src/app/model/card/movement';
import {BoardService} from '../../../service/board/board-service';
import {BoardModel} from '../../../model/board/board.model';
import {LocalService} from '../../../service/board/local/local.service';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {


  lists: ListInterface[];

  
  constructor(private localService: LocalService) {}

  ngOnInit() {


    const board = this.localService.getBoard();
    
    this.lists = board.lists || [];

    // ideally retrive and initialize from some storage.
    if (this.lists === []){
      const newList1: ListInterface = new List();
      newList1.position = this.lists.length + 1;
      newList1.name = `TO DO`;
      if (this.lists === undefined) {
        this.lists = [];
      }
      this.lists.push(newList1);
      const newList2: ListInterface = new List();
      newList2.position = this.lists.length + 1;
      newList2.name = 'IN PROGRESS';
      if (this.lists === undefined) {
        this.lists = [];
      }
      this.lists.push(newList2);
  
      const newList3: ListInterface = new List();
      newList3.position = this.lists.length + 1;
      newList3.name = `COMPLETED`;
      if (this.lists === undefined) {
        this.lists = [];
      }
      this.lists.push(newList3);
  
      const newList4: ListInterface = new List();
      newList4.position = this.lists.length + 1;
      newList4.name = `FOR TESTING`;
      if (this.lists === undefined) {
        this.lists = [];
      }
      this.lists.push(newList4);
    }
  }


  /*might not need*/
  addList() {/*
    const newList: ListInterface = new List();
    newList.position = this.lists.length + 1;
    newList.name = `TO DO`;
    if (this.lists === undefined) {
      this.lists = [];
    }
    this.lists.push(newList);

    const newList2: ListInterface = new List();
    newList2.position = this.lists.length + 1;
    newList2.name = 'IN PROGRESS';
    if (this.lists === undefined) {
      this.lists = [];
    }
    this.lists.push(newList2);

    const newList3: ListInterface = new List();
    newList3.position = this.lists.length + 1;
    newList3.name = `COMPLETED`;
    if (this.lists === undefined) {
      this.lists = [];
    }
    this.lists.push(newList3);

    const newList4: ListInterface = new List();
    newList4.position = this.lists.length + 1;
    newList4.name = `FOR TESTING`;
    if (this.lists === undefined) {
      this.lists = [];
    }
    this.lists.push(newList4);*/

    
  }


  moveCardAcrossList(movementInformation: MovementIntf) {
    const cardMoved = this.lists[movementInformation.fromListIdx].cards.splice(movementInformation.fromCardIdx, 1);
    this.lists[movementInformation.toListIdx].cards.splice(movementInformation.toCardIdx , 0 , ...cardMoved);
  }

  saveBoard() {
    const boardModel = new BoardModel();
    boardModel.lists = this.lists;
    this.localService.saveBoard(boardModel);
  }

  deleteList(listIndex: number){
      this.lists.splice(listIndex,1);
  }
}
