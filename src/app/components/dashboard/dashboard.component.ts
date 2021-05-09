import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'ProjectManagementSystem';
  Projects = [
    'project title[1]',
    'project title[2]',
  ];
}
