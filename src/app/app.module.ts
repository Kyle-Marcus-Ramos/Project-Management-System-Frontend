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
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
