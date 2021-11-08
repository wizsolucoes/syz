import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TourService } from './services/tour.service';
import { WindowService } from './services/window.service';
import { NgSyzTourComponent } from './tour.component';

@NgModule({
  declarations: [NgSyzTourComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [NgSyzTourComponent],
})
export class NgSyzTourModule {
  static forRoot(): ModuleWithProviders<NgSyzTourModule> {
    return {
      ngModule: NgSyzTourModule,
      providers: [TourService, WindowService],
    };
  }
}
