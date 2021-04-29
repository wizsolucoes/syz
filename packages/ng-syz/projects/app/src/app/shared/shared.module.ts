import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CodeExampleComponent } from './components/code-example/code-example.component';
import { ComponentPageComponent } from './components/component-page/component-page.component';

@NgModule({
  declarations: [ComponentPageComponent, CodeExampleComponent],
  imports: [
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatSnackBarModule,
    CommonModule,
  ],
  exports: [
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    ComponentPageComponent,
    CodeExampleComponent,
  ],
})
export class SharedModule {}
