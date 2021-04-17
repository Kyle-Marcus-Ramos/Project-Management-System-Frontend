import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})

export class HomeLayoutComponent implements OnInit {
  public title: string;
  public path: string;
  public isLoggedIn: boolean;

  constructor(private router: Router) { 
    this.isLoggedIn = sessionStorage.getItem('account') !== null;
  }

  ngOnInit() {
    this.path = window.location.pathname;
  }

  pageTitleEventHandler(event: any) {
    this.title = event;
  }

}
