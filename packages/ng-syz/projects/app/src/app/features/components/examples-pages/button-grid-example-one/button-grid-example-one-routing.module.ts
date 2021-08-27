import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonGridExampleOneComponent } from './button-grid-example-one.component';

const routes: Routes = [{ path: '', component: ButtonGridExampleOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonGridExampleOneRoutingModule {}
