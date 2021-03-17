import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalendarComponent } from './calendar.component';
import { CalendarRoutes } from './calendar.routing';
import { MaterialModule } from '../../material.module';

@NgModule({
    imports: [
        RouterModule.forChild(CalendarRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [CalendarComponent]
})

export class CalendarModule { }
