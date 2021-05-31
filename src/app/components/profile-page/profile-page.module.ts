import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfilePageComponent } from './profile-page.component';
import { ProfilePageRoutes } from './profile-page.routing';
import { MaterialModule } from '../../material.module';


@NgModule({
    imports: [
        RouterModule.forChild(ProfilePageRoutes),
        CommonModule,
        FormsModule,
        MaterialModule,
    ],
    declarations: []
})

export class ProfilePageModule { }
