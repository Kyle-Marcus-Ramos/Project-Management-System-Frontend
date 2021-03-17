import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoadmapComponent } from './roadmap.component';
import { RoadmapRoutes } from './roadmap.routing';
import { MaterialModule } from '../../material.module';

@NgModule({
    imports: [
        RouterModule.forChild(RoadmapRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [RoadmapComponent]
})

export class RoadmapModule { }
