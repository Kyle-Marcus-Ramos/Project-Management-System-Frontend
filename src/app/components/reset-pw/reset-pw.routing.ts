import { Routes } from '@angular/router';

import { ResetPwComponent } from './reset-pw.component';

export const ResetPwRoutes: Routes = [
  {

    path: '',
    children: [{
      path: 'resetpw',
      component: ResetPwComponent
    }]
  }
];
