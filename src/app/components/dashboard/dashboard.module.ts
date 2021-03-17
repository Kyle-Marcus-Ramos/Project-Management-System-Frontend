import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { MaterialModule } from '../../material.module';

@NgModule({
    imports: [
        RouterModule.forChild(DashboardRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [DashboardComponent]
})

export class DashboardModule { }
