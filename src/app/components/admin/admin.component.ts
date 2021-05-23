import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { MatPaginator, PageEvent } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  tm: number;
  employeeId: string;
  employeeName: string;
  numberOfTrips: number;
  date: Date;
  role: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { tm: 1522371, employeeId: 'EN47', employeeName: 'Michael Dela Cruz', numberOfTrips: 5, date: new Date(2016, 11, 24), role: 'Driver', status: 'View' },
  { tm: 1522634, employeeId: 'EN1235', employeeName: 'Joseph De Vera', numberOfTrips: 16, date: new Date(2016, 11, 24), role: 'Driver', status: 'View' },
  { tm: 6212233, employeeId: 'EN5555', employeeName: 'Ryan Locsin', numberOfTrips: 24, date: new Date(2016, 11, 24), role: 'Helper 1', status: 'View' },
  { tm: 1625724, employeeId: 'EN0125', employeeName: 'Edwin Vergara', numberOfTrips: 12, date: new Date(2016, 11, 24), role: 'Helper 2', status: 'View' },
  { tm: 4534315, employeeId: 'EN9984', employeeName: 'Mark Anthony Viray', numberOfTrips: 2, date: new Date(2016, 11, 24), role: 'Driver', status: 'View' },
  { tm: 6775322, employeeId: 'EN1222', employeeName: 'Alberto Miranda', numberOfTrips: 99, date: new Date(2016, 11, 24), role: 'Helper 2', status: 'View' },
  { tm: 7632523, employeeId: 'EN166', employeeName: 'Jeffrey Lagasca', numberOfTrips: 6, date: new Date(2016, 11, 24), role: 'Helper 1', status: 'View' },
  { tm: 8142664, employeeId: 'EN996', employeeName: 'Katherine Joy Padrique', numberOfTrips: 5, date: new Date(2016, 11, 24), role: 'Driver', status: 'View' },
  { tm: 9843325, employeeId: 'EN06', employeeName: 'Michaela Sapalo Cruz', numberOfTrips: 12, date: new Date(2016, 11, 24), role: 'Driver', status: 'View' },
  { tm: 1211520, employeeId: 'EN9215', employeeName: 'John Anthony Pareja', numberOfTrips: 55, date: new Date(2016, 11, 24), role: 'Helper 2', status: 'View' },
];

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {
  show = true;
  displayedColumns: string[] = ['tm', 'employeeId', 'employeeName', 'numberOfTrips', 'date', 'role', 'status'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  pipe: DatePipe;
  filtered: boolean;

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  manualPage = null;

  // MatPaginator Output
  // pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  public updateManualPage(index: number): void {
    this.manualPage = index;
    // this.pageEvent.pageIndex = index;
  }
  public clearManualPage(): void {
    this.manualPage = 0;
  }
  public title: string;
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  // get filterStatus() { return this.filterForm.get('filterStatus').value; }

  constructor(private router: Router) {
    this.filtered = false;
    this.pipe = new DatePipe('en');
    this.title = 'Trip Monitoring';
  }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }

  applySearchFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

  search() {
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }


  // clear() {
  //   this.filterForm.reset();
  //   window.location.reload();
  // }
}
