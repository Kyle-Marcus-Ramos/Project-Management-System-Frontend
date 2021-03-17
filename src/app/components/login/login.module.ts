import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { WidgetsRoutes } from './login.routing';
import { MaterialModule } from '../../material.module';

@NgModule({
    imports: [
        RouterModule.forChild(WidgetsRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [LoginComponent]
})

export class WidgetsModule { }
