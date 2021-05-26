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

  public events = [];
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
      ['Today', 'Project A', new Date(2020, 1, 1), new Date(2020, 1, 2)],
      ['Today', 'Project B', new Date(2020, 1, 1, 12,), new Date(2020, 1, 1, 13,)],
      ['Today', 'Project C', new Date(2020, 1, 1, 14,), new Date(2020, 1, 1, 15,)],
      ['Today', 'Project D', new Date(2020, 1, 1, 10,), new Date(2020, 1, 1, 15,)],
    ],

  };




  constructor(private _cardService: CalendarService,) {

  }


  ngOnInit() {


    this.card = new SaveCalendarRequestDTO();
    this.card.projectId = 11;
    this._cardService.GetCards(this.card).subscribe((res) => {
      if (res !== null) {
        res.forEach((item) => {
          var a = this.transform(item.estimate);
          this.events.push({
            Day: a, Name: item.title, Start: new Date(item.estimate), End: new Date(item.dueDate)
          })
        });
        console.log(this.events);


        this.timelineChartData = {
          chartType: 'Timeline',
          dataTable: [
            ['Day', 'Name', 'Start', 'End'],
            ['Today', 'Project A', new Date(2020, 1, 1), new Date(2020, 1, 2)],
            ['Today', 'Project B', new Date(2020, 1, 1, 12,), new Date(2020, 1, 1, 13,)],
            ['Today', 'Project C', new Date(2020, 1, 1, 14,), new Date(2020, 1, 1, 15,)],
            ['Today', 'Project D', new Date(2020, 1, 1, 10,), new Date(2020, 1, 1, 15,)],
          ],
        }
      }
    })


  }


}
