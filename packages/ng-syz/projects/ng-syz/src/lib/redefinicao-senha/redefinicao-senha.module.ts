import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzRedefinicaoSenhaComponent } from './redefinicao-senha.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NgSyzRedefinicaoSenhaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [ReactiveFormsModule, FormsModule, NgSyzRedefinicaoSenhaComponent],
})
export class NgSyzRedefinicaoSenhaModule {}
