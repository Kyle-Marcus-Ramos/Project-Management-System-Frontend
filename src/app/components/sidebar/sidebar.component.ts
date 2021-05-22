import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
// import PerfectScrollbar from 'perfect-scrollbar';

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
    constructor(
        private router: Router,
        public route: ActivatedRoute,
    ) {

    }


    ngOnInit() {
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
    goToAdmin() {
        this.router.navigate(['/admin/admin']);
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
