import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSyzInitiativeResultCardComponent } from './initiative-result-card.component';
import { NgxMaskModule } from 'ngx-mask';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NgSyzInitiativeResultCardComponent],
  imports: [CommonModule, NgxMaskModule.forRoot(), MatIconModule],
  exports: [NgSyzInitiativeResultCardComponent],
})
export class NgSyzInitiativeResultCardModule {}
