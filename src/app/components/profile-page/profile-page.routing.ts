import { Routes } from '@angular/router';

import { ProfilePageComponent } from './profile-page.component';

export const ProfilePageRoutes: Routes = [
  {

    path: '',
    children: [{
      path: 'profile-page',
      component: ProfilePageComponent
    }]
  }
];
