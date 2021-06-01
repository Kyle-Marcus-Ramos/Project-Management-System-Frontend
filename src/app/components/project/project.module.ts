import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectRoutes } from './project.routing';
import { MaterialModule } from '../../material.module';

@NgModule({
    imports: [
        RouterModule.forChild(ProjectRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: []
})

export class ProjectModule { }
