import { Component } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  ngOnInit() {
    console.log("HELLO WORLD")
  }
  calendarOptions: CalendarOptions = {
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
    events: [
      { title: 'PROJECT TASK 1', date: new Date() },
    ]
  }

  title = 'ProjectManagementSystem';

}
