import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzAsideMenuComponent } from './aside-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from "@angular/material/list";
import { ItemMenuComponent } from './components/item-menu/item-menu.component';


@NgModule({
  declarations: [
    NgSyzAsideMenuComponent,
    ItemMenuComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [NgSyzAsideMenuComponent],
})
export class NgSyzAsideMenuModule { }
