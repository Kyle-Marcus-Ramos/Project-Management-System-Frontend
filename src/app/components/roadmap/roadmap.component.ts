import { Component } from '@angular/core';
import { GoogleChartInterface  } from 'ng2-google-charts';
import { Session } from 'node:inspector';
import {data} from './data'
@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent {
  title = 'ProjectManagementSystem';
  public timelineChartData:GoogleChartInterface  =  {
    chartType: 'Timeline',
    dataTable: [
      [ 'Day', 'Name', 'Start', 'End'],
      [ 'Today', 'Project A', new Date(2020, 1, 1),  new Date(2020, 1, 2)],
      [ 'Today', 'Project B', new Date(2020, 1, 1, 12,), new Date(2020, 1, 1, 13,) ],
      [ 'Today', 'Project C', new Date(2020, 1, 1, 14,), new Date(2020, 1, 1, 15,) ],
      [ 'Today', 'Project D', new Date(2020, 1, 1, 10,), new Date(2020, 1, 1, 15,) ],
    ],
};
 
 
// for backend i think with data.ts 
/*
 constructor() {
  const dataTable = [
    ['Day', 'Session', 'Start', 'End']
  ]
  
  data.forEach((session, i) => { 
    
    dataTable.push(['Today', ''+session.state_tree.name, new Date(session.start_time), new Date(session.end_time)])
  })

  this.timelineChartData.dataTable = dataTable;
}*/
}
