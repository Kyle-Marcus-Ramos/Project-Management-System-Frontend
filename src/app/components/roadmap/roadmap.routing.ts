import { Routes } from '@angular/router';

import { RoadmapComponent } from './roadmap.component';

export const RoadmapRoutes: Routes = [
  {

    path: '',
    children: [{
      path: 'roadmap',
      component: RoadmapComponent
    }]
  }
];
