import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { BoardComponent } from './board.component';

import { BoardRoutes } from './board.routing';
import { MaterialModule } from '../../../material.module';


@NgModule({
    imports: [
        RouterModule.forChild(BoardRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: []
})

export class BoardModule{

}