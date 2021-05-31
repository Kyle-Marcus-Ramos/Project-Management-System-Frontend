import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { LoginComponent } from './components/login/login.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { HomeLayoutComponent } from './components/layout/home-layout/home-layout.component';
import { BoardComponent } from './components/board/board/board.component';
import { ListComponent } from './components/board/list/list.component';

import { ContentEditDirective } from './directives/common/content-edit.directive';
import { SummaryComponent } from './components/board/card/summary/summary.component';
import { DetailComponent } from './components/board/card/detail/detail.component';
import { ForgetPwComponent } from './components/forget-pw/forget-pw.component';
import { ResetPwComponent } from './components/reset-pw/reset-pw.component';

//Shared 
import { SidebarModule } from './components/sidebar/sidebar.module';
import { NavbarModule } from './components/shared/navbar/navbar.module';
import { FooterModule } from './components/shared/footer/footer.module';


//Plugins & Additional Files 
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { LocalService } from './service/board/local/local.service';
import { ContextMenuComponent } from './components/common/contextmenu/context-menu.component';
import { DashboardDialogComponent } from './dashboard-dialog/dashboard-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { KanbanboardDialogComponent } from './kanbanboard-dialog/kanbanboard-dialog.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
/*
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { FormGroup, FormControl} from '@angular/forms';*/

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  listPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarComponent,
    RegistrationComponent,
    RoadmapComponent,
    DashboardComponent,
    KanbanBoardComponent,
    HomeLayoutComponent,
    BoardComponent,
    ListComponent,
    ContentEditDirective,
    ContextMenuComponent,
    SummaryComponent,
    DetailComponent,
    ForgetPwComponent,
    ResetPwComponent,
    DashboardDialogComponent,
    KanbanboardDialogComponent,
    ProfilePageComponent,

  ],
  entryComponents: [DashboardDialogComponent, KanbanboardDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FullCalendarModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    DragDropModule,
    Ng2GoogleChartsModule,
    MatDialogModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
