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
    public menuItems: any[];
    ps: any;
    public onClick = false;
    public activeDashboard: Boolean = true;
    public roles: Array<string>;
    public showBookingArrow: Boolean = true;
    public showTripArrow: Boolean = true;
    public showAccountingArrow: Boolean = true;
    public showDocumentsArrow: Boolean = true;
    public showInventoryArrow: Boolean = true;
    public showRepairArrow: Boolean = true;
    public showUserArrow: Boolean = true;
    public showVehicleArrow: Boolean = true;
    public isLoggedIn: boolean;
    isAdmin: boolean;

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

    updatePS(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            this.ps.update();
        }
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


    goToCreateBooking() {
        this.router.navigate(['/booking/create-booking']);
        this.path = '/booking/create-booking'
    }
    goToListOfBooking() {
        this.router.navigate(['/booking/list-of-booking']);
        this.path = '/booking/list-of-booking';

    }
    goToDashboard() {
        this.router.navigate(['dashboard']);
        this.path = '/dashboard';
    }
    goToCashVoucher() {
        this.router.navigate(['/cash-advance/cash-advance']);
        this.path = '/cash-advance/cash-advance';
    }
    goToListOfVoucher() {
        this.router.navigate(['/cash-advance/cash-count']);
        this.path = '/cash-advance/cash-count';
    }

    goToManageTrip() {
        this.router.navigate(['/trip/manage-trip']);
        this.path = '/trip/manage-trip';
    }
    goToListOfTrip() {
        this.router.navigateByUrl('/trip/list-of-trip');
        this.path = '/trip/list-of-trip';
    }
    goToListOfPayroll() {
        this.router.navigateByUrl('/payroll/list-of-payroll');
        this.path = '/payroll/list-of-payroll';
    }
    goToFileUpload() {
        this.router.navigate(['/file-upload']);
        this.path = '/file-upload';
    }
    goToTransmittal() {
        this.router.navigate(['/transmittal']);
        this.path = '/transmittal';
    }
    goToAccessLevel() {
        this.router.navigate(['/access-level/access-level']);
    }
    goToAddEmployee() {
        this.router.navigate(['/add-employee/add-employee']);
        this.path = '/add-employee/add-employee';

    }
    goToAddClient() {
        this.router.navigate(['/add-client/add-client']);
        this.path = '/add-client/add-client';
    }
    goToAddTruck() {
        this.router.navigate(['/truck/add-truck']);
        this.path = '/truck/add-truck';
    }
    goToListOfEmployee() {
        this.router.navigate(['/list-of-employee/list-of-employee']);
        this.path = '/list-of-employee/list-of-employee';
    }
    goToListOfClient() {
        this.router.navigate(['/list-of-client/list-of-client']);
        this.path = '/list-of-client/list-of-client';
    }
    goToListOfTruck() {
        this.router.navigate(['/truck/list-of-truck']);
        this.path = '/truck/list-of-truck';
    }
    goToRepairs() {
        this.router.navigate(['/repairs/repairs']);
        this.path = '/repairs/repairs';
    }
    goToListOfRepairs() {
        this.router.navigate(['/list-of-repairs/list-of-repairs']);
        this.path = '/list-of-repairs/list-of-repairs';
    }
    goToInventory() {
        this.router.navigate(['/inventory/inventory']);
        this.path = '/inventory/inventory';
    }
    goToListOfInventory() {
        this.router.navigate(['/list-of-inventory/list-of-inventory']);
        this.path = '/list-of-inventory/list-of-inventory';
    }
    goToAccountingListOfBooking() {
        this.router.navigate(['/accounting-list-of-booking/accounting-list-of-booking']);
        this.path = '/accounting-list-of-booking/accounting-list-of-booking';
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
