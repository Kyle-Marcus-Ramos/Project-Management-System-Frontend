import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileRoutes } from './profile.routing';
import { MaterialModule } from '../../material.module';

@NgModule({
    imports: [
        RouterModule.forChild(ProfileRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: []
})

export class ProfileModule { }
