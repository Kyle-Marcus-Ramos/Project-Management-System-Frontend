import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
// import { MatBadgeModule } from '@angular/material/badge';
// import { MatIconModule } from '@angular/material/icon';
@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [NavbarComponent],
    exports: [NavbarComponent]
})

export class NavbarModule { }
