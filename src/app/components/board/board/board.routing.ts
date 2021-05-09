import { Routes } from '@angular/router';

import { BoardComponent } from './board.component';

export const BoardRoutes: Routes = [
  {

    path: '',
    children: [{
      path: 'board',
      component: BoardComponent
    }]
  }
];
