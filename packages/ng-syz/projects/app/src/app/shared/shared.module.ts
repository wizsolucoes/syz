import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CodeExampleComponent } from './components/code-example/code-example.component';
import { ComponentPageComponent } from './components/component-page/component-page.component';
import { ContributorsComponent } from './components/contributors/contributors.component';

@NgModule({
  declarations: [
    ComponentPageComponent,
    CodeExampleComponent,
    ContributorsComponent,
  ],
  imports: [
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTooltipModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    ComponentPageComponent,
    CodeExampleComponent,
  ],
})
export class SharedModule {}
