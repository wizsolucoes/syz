import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-pages-routing.module';
import { ExamplesPagesComponent } from './examples-pages.component';

@NgModule({
  declarations: [ExamplesPagesComponent],
  imports: [CommonModule, ExamplesRoutingModule],
})
export class ExamplesModule {}
