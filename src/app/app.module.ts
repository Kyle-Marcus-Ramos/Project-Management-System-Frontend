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
import {DragDropModule} from '@angular/cdk/drag-drop';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import {LocalService} from './service/board/local/local.service';
import { ContextMenuComponent } from './components/common/contextmenu/context-menu.component';

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
    DetailComponent
  ],
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

  ],
  providers: [ LocalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
