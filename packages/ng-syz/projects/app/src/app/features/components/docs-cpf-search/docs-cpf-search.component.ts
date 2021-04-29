import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-cpf-search',
  templateUrl: './docs-cpf-search.component.html',
  styleUrls: ['./docs-cpf-search.component.scss'],
})
export class DocsCpfSearchComponent {
  /* Documentation */
  importCode = `
  import { NgSyzCpfSearchModule } from '@wizsolucoes/ng-syz';
  `;

  componentProps: ComponentProps[] = [
    {
      name: `@Input() message: string`,
      description: 'O texto que aparece no lado esquerdo do componente.',
    },
    {
      name: '@Output() buttonClick: EventEmitter<string>',
      description: 'Evento emitido quando o usuário clica no botão pesquisar',
    },
  ];

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--primary-color`,
      description: 'Cor do início do gradiente do fundo do componente',
    },
    {
      name: `--secondary-color`,
      description: 'Cor do fim do gradiente do fundo do componente',
    },
    {
      name: `--accent-color`,
      description: 'Cor do botão',
    },
    {
      name: `--light-text-color`,
      description:
        'Cor do texto, da borda e do preechimento do rádio e da borda do input',
    },
    {
      name: `--font-size`,
      description: 'Tamanho da fonte da mensagem',
    },
  ];

  htmlExampleCode = `
  <ng-syz-cpf-search
    [message]="'Acompanhe seus pedidos!'"
    (buttonClick)="onCpfSeachButtonClick($event)">
  </ng-syz-cpf-search>
  `;

  tsExampleCode = `
  onCpfSeachButtonClick(value: string): void {
    this.snackBar.open(value, 'Fechar');
  }
  `;

  htmlExampleCode2 = `
  <ng-syz-cpf-search
    class="example-2"
    [message]="'Acompanhe seus pedidos!'"
    (buttonClick)="onCpfSeachButtonClick($event)">
  </ng-syz-cpf-search>
  `;

  cssExampleCode = `
  ng-syz-cpf-search.example-2 {
    --primary-color: darkblue;
    --secondary-color: blue;
    --accent-color: darkorange;
  }
  `;

  /* Demo code */

  constructor(private snackBar: MatSnackBar) {}

  onCpfSeachButtonClick(value: string): void {
    this.snackBar.open(value, 'Fechar');
  }
}
