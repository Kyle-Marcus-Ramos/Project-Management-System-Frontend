import { Component, Input, OnInit } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() public pageTitle: string;
  public navbarOpen = false;
  public isScrolled = false;
  public unreadCount = 0;
  public isServices = false;
  public name = 'Angular 5';
  public setTitle: string;


  constructor(private _router: Router,
    private _activatedRoute: ActivatedRoute,) {
    var services = ['/telecoms', 'gaming-pins', 'prepaid-insurance', 'pay-tv']
    //     this._router.events.subscribe((event) => {
    //       if (event instanceof NavigationStart) {
    //         if(this.services.includes(event.url)){
    //           this.isServices = true;
    //         }
    //         else{
    //           this.isServices = false;
    //         }
    //         console.log(this.isServices, "SEVR")
    //       }
    //   });
  }


  ngOnInit() {


  }

  openNotifications() {
    this.unreadCount = 0;
  }


  sTitle(value: string) {
    this.setTitle = value;
  }


  toggleNavBar() {
    this.navbarOpen = !this.navbarOpen;
  }



}