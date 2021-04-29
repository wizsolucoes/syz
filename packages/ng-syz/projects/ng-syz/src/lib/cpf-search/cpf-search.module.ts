import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzCpfSearchComponent } from './cpf-search.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [NgSyzCpfSearchComponent],
  imports: [
    // Anuglar
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NgxMaskModule.forRoot(),

    // Angular Mateiral
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [NgSyzCpfSearchComponent],
})
export class NgSyzCpfSearchModule {}
