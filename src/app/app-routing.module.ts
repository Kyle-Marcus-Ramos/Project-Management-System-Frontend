import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './components/layout/home-layout/home-layout.component';
import { LoginComponent } from './components/login/login.component';

import { CalendarModule } from './components/calendar/calendar.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { KanbanBoardModule } from './components/kanban-board/kanban-board.module';
import { RegistrationModule } from './components/registration/registration.module';
import { ForgetPwModule } from './components/forget-pw/forget-pw.module';
import { ResetPwModule } from './components/reset-pw/reset-pw.module';
import { RoadmapModule } from './components/roadmap/roadmap.module';
import { BoardModule } from './components/board/board/board.module';
import { AdminModule } from './components/admin/admin.module';
import { ProfileModule } from './components/profile/profile.module';
import { ProjectModule } from './components/project/project.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
  {
    path: 'calendar',
    loadChildren: () => CalendarModule
  },
  {
    path: 'dashboard',
    loadChildren: () => DashboardModule
  },
  {
    path: 'kanban-board',
    loadChildren: () => KanbanBoardModule
  },
  {
    path: 'registration',
    loadChildren: () => RegistrationModule
  },
  {
    path: 'forgetpw',
    loadChildren: () => ForgetPwModule
  },
  {
    path: 'resetpw',
    loadChildren: () => ResetPwModule
  },
  {
    path: 'roadmap',
    loadChildren: () => RoadmapModule
  },
  {
    path: 'board',
    loadChildren: () => BoardModule
  },
  {
    path: 'admin',
    loadChildren: () => AdminModule
  },
  {
    path: 'profile',
    loadChildren: () => ProfileModule
  },
  {
    path: 'project',
    loadChildren: () => ProjectModule
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
