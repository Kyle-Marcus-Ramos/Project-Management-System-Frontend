import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KanbanBoardComponent } from './kanban-board.component';
import { KanbanBoardRoutes } from './kanban-board.routing';
// import { MaterialModule } from '../../material.module';

@NgModule({
    imports: [
        RouterModule.forChild(KanbanBoardRoutes),
        CommonModule,
        FormsModule,
        // MaterialModule
    ],
    declarations: []
})

export class KanbanBoardModule {

}

