import { Component, ElementRef, Input, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ListInterface, List } from '../../../model/list/list.model';
import { Card, CardInterface } from '../../../model/card/card.model';
import { MovementIntf, Movement } from 'src/app/model/card/movement';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KanbanboardDialogComponent } from 'src/app/kanbanboard-dialog/kanbanboard-dialog.component';
import { CardService } from 'src/app/service/api/card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})




export class ListComponent implements OnInit {

  @Input() list: ListInterface;
  @Input() listIndex: number;
  @Output() moveCardAcrossList: EventEmitter<MovementIntf> = new EventEmitter<MovementIntf>();
  @Output() newCardAdded: EventEmitter<Card> = new EventEmitter<CardInterface>();
  @Output() deleteList: EventEmitter<number> = new EventEmitter<number>();

  private cardCount = 0;

  /*TEST*/
  dialogValue: string;
  sendValue: string;
  projectId: number;

  /*TEST*/
  constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document, public dialog: MatDialog,
    private _cardService: CardService,) {

  }
  openDialog() {

    /*
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true; */
    const dialogRef = this.dialog.open(KanbanboardDialogComponent,
      {
        width: '700px',
        // data: {
        //   index: this.listIndex
        // }


      });
  }


  ngOnInit() {
    // this.projectId = JSON.parse(sessionStorage.getItem("projectId"));
    // console.log('list')
    // this._cardService.GetCards(this.projectId).subscribe((res) => {
    //   if (res !== null) {
    //     console.log(res);
    //     // sessionStorage.setItem("projects", res)
    //   }

    // });
  }

  addNewCard() {


    const card = new Card(this.cardCount++ + '', 'Issue ' + this.cardCount, 'Description ' + this.cardCount, 'sample desc' + this.cardCount, 'sample title');
    this.list.cards.push(card);
    this.newCardAdded.emit(card);
  }


  allowCardReplacement(dragEvent: DragEvent) {
    dragEvent.dataTransfer.dropEffect = 'move';
    dragEvent.preventDefault();
  }

  delete() {
    this.deleteList.emit(this.listIndex);

  }


  dropCard(dragEvent: DragEvent) {
    const data = JSON.parse(dragEvent.dataTransfer.getData('text'));
    const elements: Element[] = this.document.elementsFromPoint(dragEvent.x, dragEvent.y);
    const cardElementBeingDroppedOn = elements.find(x => x.tagName.toLowerCase() === 'app-card-summary');
    const listElementBeingDroppedOn = elements.find(x => x.tagName.toLowerCase() === 'app-list');
    const listIndexDroppedOn = parseInt(listElementBeingDroppedOn.getAttribute('listIndex'), 10);
    const cardIndexDroppedOn = cardElementBeingDroppedOn === undefined ? undefined :
      parseInt(cardElementBeingDroppedOn.getAttribute('cardIndex'), 10);
    const listIndexDragged = parseInt(data.listIndex, 10);
    const cardIndexDragged = parseInt(data.cardIndex, 10);

    if (listIndexDragged === listIndexDroppedOn) {
      // same list just re-organize the cards
      const cardDragged = this.list.cards.splice(cardIndexDragged, 1);
      this.list.cards.splice(cardIndexDroppedOn, 0, ...cardDragged);
    } else {
      this.moveCardAcrossList.emit(new Movement(listIndexDragged, listIndexDroppedOn, cardIndexDragged, cardIndexDroppedOn));
    }

  }



}
