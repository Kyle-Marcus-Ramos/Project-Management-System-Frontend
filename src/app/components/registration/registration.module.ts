import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration.component';
import { RegistrationRoutes } from './registration.routing';
// import { MaterialModule } from '../../material.module';

@NgModule({
    imports: [
        RouterModule.forChild(RegistrationRoutes),
        CommonModule,
        FormsModule,
        // MaterialModule
    ],
    declarations: []
})

export class RegistrationModule { }
