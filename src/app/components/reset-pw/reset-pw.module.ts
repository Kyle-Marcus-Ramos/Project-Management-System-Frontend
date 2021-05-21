import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ResetPwComponent } from './reset-pw.component';
import { ResetPwRoutes } from './reset-pw.routing';
import { MaterialModule } from '../../material.module';

@NgModule({
    imports: [
        RouterModule.forChild(ResetPwRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: []
})

export class ResetPwModule { }
