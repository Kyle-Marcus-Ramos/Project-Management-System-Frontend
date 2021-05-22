import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutes } from './admin.routing';
import { MaterialModule } from '../../material.module';

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: []
})

export class AdminModule { }
