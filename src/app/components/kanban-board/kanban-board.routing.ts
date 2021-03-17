import { Routes } from '@angular/router';

import { KanbanBoardComponent } from './kanban-board.component';

export const KanbanBoardRoutes: Routes = [
  {

    path: '',
    children: [{
      path: 'kanban-board',
      component: KanbanBoardComponent
    }]
  }
];
