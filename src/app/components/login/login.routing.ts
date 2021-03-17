import { Routes } from '@angular/router';

import { LoginComponent } from './login.component';

export const WidgetsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: LoginComponent
    }]
}
];
