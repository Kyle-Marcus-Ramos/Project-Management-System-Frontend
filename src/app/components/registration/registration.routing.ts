import { Routes } from '@angular/router';

import { RegistrationComponent } from './registration.component';

export const RegistrationRoutes: Routes = [
  {

    path: '',
    children: [{
      path: 'registration',
      component: RegistrationComponent
    }]
  }
];
