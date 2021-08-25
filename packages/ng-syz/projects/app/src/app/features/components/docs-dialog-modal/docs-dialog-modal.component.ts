import { Component } from '@angular/core';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-dialog-modal',
  templateUrl: './docs-dialog-modal.component.html',
  styleUrls: ['./docs-dialog-modal.component.scss']
})
export class DocsDialogModalComponent {

  importCode = `
  import { NgSyzDialogModalModule } from '@wizsolucoes/ng-syz';
  `;

  componentProps: ComponentProps[] = [
    {
      name: `@Input() texto: string`,
      description: 'O texto da modal.',
    },
    {
      name: '@Input() titulo: string',
      description: 'Titulo da modal.',
    },
    {
      name: '@Input() textoBotao: string',
      description: 'Texto do botal.',
    },
    {
      name: '@Input() rotaExterna: bool',
      description: 'Rota do click do botão se será externo ou interno.',
    },
    {
      name: '@Input() urlRota: string',
      description: 'Url da rota do botão.',
    },
    {
      name: '@Input() imagem: string',
      description: 'Imagem que será exibida no modal.',
    },
    {
      name: '@Input() percentBorderRadiusButton: string',
      description: 'Percentual do border radius do botão.',
    }
  ];

  htmlExampleCode = `
  <ng-syz-dialog-modal
    [titulo]="'Titulo da Modal'"
    [texto]="'Texto da Modal'"
    [textoBotao]="'Botão teste'"
    [rotaExterna]="'false'"
    [urlRota]="'www.google.com'"
    [imagem]="'https://i.stack.imgur.com/W9kaK.jpg'"
    [percentBorderRadiusButton]="'50'">
  </ng-syz-dialog-modal>
  `;

  tsExampleCode = `

  `;

}
