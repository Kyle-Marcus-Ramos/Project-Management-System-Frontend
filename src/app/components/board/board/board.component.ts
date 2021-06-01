import { Component, NgModule, OnInit } from '@angular/core';
import { List, ListInterface } from '../../../model/list/list.model';
import { MovementIntf } from 'src/app/model/card/movement';
import { BoardService } from '../../../service/board/board-service';
import { BoardModel } from '../../../model/board/board.model';
import { LocalService } from '../../../service/board/local/local.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KanbanboardDialogComponent } from 'src/app/kanbanboard-dialog/kanbanboard-dialog.component';
import { CardService } from 'src/app/service/api/card.service';
import { SaveKanbanRequestDTO } from 'src/app/model/api/kanban';




@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [CardService],
})
export class BoardComponent implements OnInit {
  public card: SaveKanbanRequestDTO;
  public updateCard: SaveKanbanRequestDTO;
  lists: ListInterface[];

  constructor(private localService:
    LocalService, public dialog: MatDialog,
    private _cardService: CardService,

  ) { }



  openDialog() {
    this.dialog.open(KanbanboardDialogComponent, {

    });
  }

  ngOnInit() {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }

    const board = this.localService.getBoard();
    this.card = new SaveKanbanRequestDTO();

    this.card.projectId = JSON.parse(sessionStorage.getItem("projectId"));
    console.log(this.card);

    // Hardcoded for Demonstration Purposes only
    // this.card.projectId = 11;

    setInterval(() => this._cardService.GetCards(this.card).subscribe((res) => {
      console.log("RESPONSE FOR BOARD COMPONENT: ")
      console.log(res);
      if (res !== null) {
        this.lists = res;
      }
    }), 9000);

    // this.lists = board.lists;

    // ideally retrive and initialize from some storage.
    if (this.lists === undefined) {

      const newList1: ListInterface = new List();
      // newList1.position = 0;
      newList1.position = 0 + 1;

      newList1.name = `TO DO`;
      // console.log("To do supposedly" + newList1.name);


      if (this.lists === undefined) {
        this.lists = [];
      }

      this.lists.push(newList1);
      const newList2: ListInterface = new List();
      // newList2.position = 1;
      newList2.position = this.lists.length + 1;

      newList2.name = `IN PROGRESS`;
      if (this.lists == undefined) {
        this.lists = [];
      }
      this.lists.push(newList2);

      const newList3: ListInterface = new List();
      // newList3.position = 2;
      newList2.position = this.lists.length + 1;

      newList3.name = `COMPLETED`;
      if (this.lists === undefined) {
        this.lists = [];
      }
      this.lists.push(newList3);

      const newList4: ListInterface = new List();
      // newList4.position = 3;
      newList2.position = this.lists.length + 1;

      newList4.name = `FOR TESTING`;
      if (this.lists === undefined) {
        this.lists = [];
      }
      this.lists.push(newList4);
    }
  }




  moveCardAcrossList(movementInformation: MovementIntf) {
    const cardMoved = this.lists[movementInformation.fromListIdx].cards.splice(movementInformation.fromCardIdx, 1);
    this.lists[movementInformation.toListIdx].cards.splice(movementInformation.toCardIdx, 0, ...cardMoved);

    console.log(movementInformation);
    cardMoved.forEach((item) => {
      console.log(item);
      this.updateCard = new SaveKanbanRequestDTO();
      this.updateCard.description = item.description;
      this.updateCard.title = item.title;
      this.updateCard.position = movementInformation.toListIdx;
      console.log(this.updateCard);
      this._cardService.UpdateCard(this.updateCard).subscribe((res) => {
      })

    })




  }

  saveBoard() {
    const boardModel = new BoardModel();
    boardModel.lists = this.lists;
    this.localService.saveBoard(boardModel);
  }

  deleteList(listIndex: number) {
    this.lists.splice(listIndex, 1);
  }
}
