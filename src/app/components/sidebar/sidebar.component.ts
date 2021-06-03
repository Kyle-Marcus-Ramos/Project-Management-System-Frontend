import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
// import PerfectScrollbar from 'perfect-scrollbar';
import swal from 'sweetalert2';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

@Component({
    providers: [],
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    @Output() public pageTitle: EventEmitter<string> = new EventEmitter<string>();
    public path: string;
    public toast = swal.mixin({
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 3000
    });
    public isAdmin: boolean;
    constructor(
        private router: Router,
        public route: ActivatedRoute,
    ) {

    }


    ngOnInit() {


        var response = JSON.parse(sessionStorage.getItem("loginResponse"));
        console.log("TEST TSET TEST TESTSTS EST")
        console.log(response.name);

        console.log(response.isAdmin);



        if (response.isAdmin === false) {

            this.isAdmin = false;
        }
        else {
            this.isAdmin = true;
        }
        this.pageTitle.emit('Dashboard');
        // this.menuItems = ROUTES.filter(menuItem => menuItem);
        // if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
        //     const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
        //     this.ps = new PerfectScrollbar(elemSidebar);
        // }


    }



    ngAfterViewInit() {
    }



    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };



    goToDashboard() {
        sessionStorage.setItem("projectId", null);

        this.router.navigate(['/dashboard/dashboard']);
    }
    goToKanbanBoard() {
        this.router.navigate(['/board/board']);
    }
    goToCalendar() {
        this.router.navigate(['/calendar/calendar']);
    }
    goToRoadmap() {
        this.router.navigate(['/roadmap/roadmap']);
    }
    goToProfile() {
        this.router.navigate(['/profile/profile']);
    }
    goToProject() {
        this.router.navigate(['/project/project']);
    }
    goToAdmin() {
        this.router.navigate(['/admin/admin']);
    }
    logout() {
        this.toast.fire({
            type: 'success',
            title: 'Logout Successful!'
        })
        sessionStorage.clear()
        this.router.navigate(['/login/login']);

    }

    setPageTitle(page: string) {
        this.pageTitle.emit(page);
    }

    goToSubmenuPage(title: string, menuPath: string, submenuPath: string) {
        const navigationExtras: NavigationExtras = {
            state: { title: title }
        };
        this.router.navigate([menuPath, submenuPath], navigationExtras);
    }
}
