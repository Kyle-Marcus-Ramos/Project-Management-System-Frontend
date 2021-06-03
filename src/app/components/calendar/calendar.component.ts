import { Component } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { SaveKanbanRequestDTO } from 'src/app/model/api/kanban';
import { CalendarService } from 'src/app/service/api/calendar.service';
import { SaveCalendarRequestDTO } from 'src/app/model/api/calendar';
@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [CalendarService]
})
export class CalendarComponent {
  public card: SaveCalendarRequestDTO;
  private arrayTitleCard: Array<String> = [];
  private arrayDateCard: object[];
  public events = [];

  calendarOptions: any;

  constructor(private _cardService: CalendarService,) {

  }

  ngOnInit() {

    this.card = new SaveCalendarRequestDTO();

    //Session Storage (Not Hardcoded)
    this.card.projectId = JSON.parse(sessionStorage.getItem("projectId"));
    console.log(this.card.projectId)

    //Hardcoded for Demonstration Purposes only
    // this.card.projectId = 11;

    this._cardService.GetCards(this.card).subscribe((res) => {
      if (res !== null) {
        res.forEach((item) => {
          this.events.push({
            title: item.title, date: new Date(item.estimate)
          })
        });
        console.log(this.events);

        this.calendarOptions = {
          initialView: 'dayGridMonth',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,listWeek',
          },
          buttonText: {
            today: 'Today',
            month: 'Month',
            week: 'Week',
            list: 'Day'
          },
          views: {
            dayGridWeek: {
              duration: { weeks: 2 },
              buttonText: 'Week',
            },
          },
          dayMaxEvents: true,

          events: this.events

        }
      }
    })




  }


  // calendarOptions: CalendarOptions = {

  //   initialView: 'dayGridMonth',
  //   headerToolbar: {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'dayGridMonth,dayGridWeek,listWeek',
  //   },
  //   buttonText: {
  //     today: 'Today',
  //     month: 'Month',
  //     week: 'Week',
  //     list: 'Day'
  //   },
  //   views: {
  //     dayGridWeek: {
  //       duration: { weeks: 2 },
  //       buttonText: 'Week',
  //     },
  //   },
  //   dayMaxEvents: true,

  //   // events: this.events

  //   events: [
  //     {
  //       title: 'PROJECT TASK 1', date: new Date()
  //     },
  //     {
  //       title: 'PROJECT TASK 2', date: new Date("2021-05-24T07:39:29.4809178")
  //     },
  //     {
  //       title: 'PROJECT TASK 3', date: new Date(2021, 4, 27)
  //     },
  //     {
  //       title: 'PROJECT TASK 4', date: new Date(2021, 4, 28)
  //     },
  //   ]
  // }

  title = 'ProjectManagementSystem';

}
