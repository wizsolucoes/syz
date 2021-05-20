import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonInfoComponent } from './person-info.component';

const routes: Routes = [{ path: '', component: PersonInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonInfoRoutingModule { }
