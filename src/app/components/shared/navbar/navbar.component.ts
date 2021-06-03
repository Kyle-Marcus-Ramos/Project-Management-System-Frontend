import { Component, Input, OnInit } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError } from "@angular/router";
import swal from 'sweetalert2';

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
  public toast = swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000
  });

  profileDetails = {
    isAdmin: '',
    name: '',

  }

  constructor(private router: Router,
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
    var response = JSON.parse(sessionStorage.getItem("loginResponse"));
    console.log("TEST TSET TEST TESTSTS EST")
    console.log(response.name);

    console.log(response.isAdmin);

    if (response.isAdmin === false) {
      this.profileDetails.name = response.name;
      this.profileDetails.isAdmin = "USER";

    }
    else {
      this.profileDetails.name = response.name;
      this.profileDetails.isAdmin = "ADMIN";

    }

    console.log(this.profileDetails.isAdmin);
  }

  openNotifications() {
    this.unreadCount = 0;
  }
  logout() {
    this.toast.fire({
      type: 'success',
      title: 'Logout Successful!'
    })
    sessionStorage.clear()
    this.router.navigate(['/login/login']);

  }

  sTitle(value: string) {
    this.setTitle = value;
  }


  toggleNavBar() {
    this.navbarOpen = !this.navbarOpen;
  }



}
