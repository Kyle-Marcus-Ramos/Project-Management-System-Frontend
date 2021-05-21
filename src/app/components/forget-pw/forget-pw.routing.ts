import { Routes } from '@angular/router';

import { ForgetPwComponent } from './forget-pw.component';

export const ForgetPwRoutes: Routes = [
  {

    path: '',
    children: [{
      path: 'forgetpw',
      component: ForgetPwComponent
    }]
  }
];
