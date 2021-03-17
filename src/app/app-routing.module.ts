import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './components/layout/home-layout/home-layout.component';
import { LoginComponent } from './components/login/login.component';



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
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
