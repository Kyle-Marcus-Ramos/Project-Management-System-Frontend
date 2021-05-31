import { Component } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { SaveCalendarRequestDTO } from 'src/app/model/api/calendar';
import { CalendarService } from 'src/app/service/api/calendar.service';
/*import { Session } from 'node:inspector';*/
import { data } from './data'
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css'],
  providers: [CalendarService]

})

// @Pipe({
//   name: 'dateFormatPipe',
// })

export class RoadmapComponent implements PipeTransform {
  public card: SaveCalendarRequestDTO;

  public events: Array<any> = [];
  public eventsArray = [];
  title = 'ProjectManagementSystem';

  transform(value: string) {
    var datePipe = new DatePipe("en-US");
    value = datePipe.transform(value, 'MMMM/dd');
    return value;
  }
  // public timelineChartData: any;
  public timelineChartData: GoogleChartInterface = {
    chartType: 'Timeline',
    dataTable: [
      ['Day', 'Name', 'Start', 'End'],
      ['Test', 'Project A', new Date(2020, 1, 1), new Date(2020, 1, 2)],
      ['Test 1', 'Project B', new Date(2020, 1, 1, 12,), new Date(2020, 1, 1, 13,)],
      ['Today', 'Project C', new Date(2020, 1, 1, 14,), new Date(2020, 1, 1, 15,)],
      ['Today', 'Project D', new Date(2020, 1, 1, 10,), new Date(2020, 1, 1, 15,)],
    ],

  };




  constructor(private _cardService: CalendarService,) {

  }


  ngOnInit() {


    this.card = new SaveCalendarRequestDTO();
    this.card.projectId = JSON.parse(sessionStorage.getItem("projectId"));
    this._cardService.GetCardss(this.card).subscribe((res) => {
      if (res !== null) {
        console.log(res);
        // res.forEach((item) => {
        //   // var a = this.transform(item.estimate);
        //   console.log(item);
        //   // this.events.push(
        //   //   item.estimate, item.title, new Date(item.estimate), new Date(item.dueDate)
        //   // )
        //   // item.forEach(element => {
        //   //   console.log(element);
        //   // });
        //   // this.events.push(
        //   //   a, item.title
        //   // )
        //   // this.events.push(item);

        //   this.eventsArray.push(this.events)
        //   console.log('next record');
        //   // console.log(this.events);
        //   // console.log(item);
        // });
        console.log(this.eventsArray);
        // console.log(this.events);

        var a = ['Today', 'Project D', new Date(2020, 1, 1, 10,), new Date(2020, 1, 1, 15,)];
        console.log(a);
        // this.timelineChartData = {
        //   chartType: 'Timeline',
        //   dataTable: res,
        // }
        // console.log(this.timelineChartData);
      }
    })


  }


}
