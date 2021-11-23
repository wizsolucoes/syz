import { Component, OnInit } from '@angular/core';
import { NgSyzButton } from 'projects/ng-syz/src/lib/models';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-button-grid',
  templateUrl: './docs-button-grid.component.html',
  styleUrls: ['./docs-button-grid.component.scss'],
})
export class DocsButtonGridComponent implements OnInit {
  // Exemplo
  tituloExemplo1 = 'Tipo de Seguro';
  subtituloExemplo1 = 'Seguros disponíveis';

  // 42 = 42
  tituloExemplo2 = 'Tipo de Seguro';
  subtituloExemplo2 = 'Seguros disponíveis';

  tituloExemplo3 = 'Tipo de Seguro 3';
  subtituloExemplo3 = 'Seguros disponíveis 3';

  description = `Este componente apresenta uma grid de botões customizada.`;

  importCode = `import { NgSyzButtonGridModule } from '@wizsolucoes/ng-syz';`;

  buttons: NgSyzButton[] = [
    {
      text: 'Seguro Agrícola',
      iconClass: 'fa fa-address-book',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Cafezal',
      iconClass: 'fa fa-coffee',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Pecuário',
      iconClass: 'fa fa-eercast',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Canavial',
      iconClass: 'fa fa-picture-o',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Floresta',
      iconClass: 'fa fa-tree',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Penhor de Grãos',
      iconClass: 'fa fa-picture-o',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Benfeitorias e Multirrisco rural',
      iconClass: 'fa fa-picture-o',
      disabled: true,
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Automotivo',
      iconClass: 'fa fa-car',
      disabled: true,
    },
    {
      text: 'Seguro Penhor de Máquinas e Equipamentos ',
      imgPath: 'imgPath',
      route: '/components/button-grid',
    },
  ];

  componentProps: ComponentProps[] = [
    {
      name: '@Input() buttons: NgSyzButton[]',
      description: 'Dados sobre o botão.',
    },
    {
      name: '@Input() titulo: string',
      description: 'Título.',
    },
    {
      name: '@Input() subtitulo: string',
      description: 'Subtítulo.',
    },
  ];

  htmlExampleCode1 = `
  <ng-syz-button-grid
    [titulo]="tituloExemplo1"
    [subtitulo]="subtituloExemplo1"
    [buttons]="buttons"
  ></ng-syz-button-grid>
  `;

  htmlExampleCode2 = `
  <ng-syz-button-grid
    [titulo]="tituloExemplo2"
    [subtitulo]="subtituloExemplo2"
    [buttons]="buttons"
  ></ng-syz-button-grid>
  `;

  htmlExampleCode3 = `
  <ng-syz-button-grid
    [titulo]="tituloExemplo3"
    [subtitulo]="subtituloExemplo3"
    [buttons]="buttons"
  ></ng-syz-button-grid>
  `;

  tsExampleCode1 = `
  import { NgSyzButton } from 'projects/ng-syz/src/lib/models';
  
  tituloExemplo1 = 'Tipo de Seguro';
  subtituloExemplo1 = 'Subtítulo';

  buttons: NgSyzButton[] = [
    {
      text: 'Seguro Agrícola',
      iconClass: 'fa fa-address-book',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Cafezal',
      iconClass: 'fa fa-coffee',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Pecuário',
      iconClass: 'fa fa-eercast',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Canavial',
      iconClass: 'fa fa-picture-o',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Floresta',
      iconClass: 'fa fa-tree',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Penhor de Grãos',
      iconClass: 'fa fa-picture-o',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Benfeitorias e Multirrisco rural',
      iconClass: 'fa fa-picture-o',
      disabled: true,
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Automotivo',
      iconClass: 'fa fa-car',
      disabled: true,
    },
    {
      text: 'Seguro Penhor de Máquinas e Equipamentos ',
      imgPath: 'imgPath',
      route: '/components/button-grid',
    },
  ];

  `;

  tsExampleCode2 = `
  import { NgSyzButton } from 'projects/ng-syz/src/lib/models';
  
  tituloExemplo2 = 'Listagem de seguros';
  subtituloExemplo2 = 'Selecione o seguro desejado';

  buttons: NgSyzButton[] = [
    {
      text: 'Seguro Agrícola',
      iconClass: 'fa fa-address-book',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Cafezal',
      iconClass: 'fa fa-coffee',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Pecuário',
      iconClass: 'fa fa-eercast',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Canavial',
      iconClass: 'fa fa-picture-o',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Floresta',
      iconClass: 'fa fa-tree',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Penhor de Grãos',
      iconClass: 'fa fa-picture-o',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Benfeitorias e Multirrisco rural',
      iconClass: 'fa fa-picture-o',
      disabled: true,
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Automotivo',
      iconClass: 'fa fa-car',
      disabled: true,
    },
    {
      text: 'Seguro Penhor de Máquinas e Equipamentos ',
      imgPath: 'imgPath',
      route: '/components/button-grid',
    },
  ];

  `;

  tsExampleCode3 = `
  import { NgSyzButton } from 'projects/ng-syz/src/lib/models';
  
  tituloExemplo3 = 'Tipo de Seguro 3';
  subtituloExemplo3 = 'Seguros disponíveis 3';

  buttons: NgSyzButton[] = [
    {
      text: 'Seguro Agrícola',
      iconClass: 'fa fa-address-book',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Cafezal',
      iconClass: 'fa fa-coffee',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Pecuário',
      iconClass: 'fa fa-eercast',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Canavial',
      iconClass: 'fa fa-picture-o',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Floresta',
      iconClass: 'fa fa-tree',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Penhor de Grãos',
      iconClass: 'fa fa-picture-o',
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Benfeitorias e Multirrisco rural',
      iconClass: 'fa fa-picture-o',
      disabled: true,
      route: '/components/button-grid',
    },
    {
      text: 'Seguro Automotivo',
      iconClass: 'fa fa-car',
      disabled: true,
    },
    {
      text: 'Seguro Penhor de Máquinas e Equipamentos ',
      imgPath: 'imgPath',
      route: '/components/button-grid',
    },
  ];

  `;

  cssExample1 = `
    ng-syz-button-grid {
      --cor-texto: #fff;
      --cor-texto-hover: black;
      --cor-borda: #fff;
      --cor-fundo: #fd5725;
      --cor-fundo-contraste: #fd7524;
    }
  `;

  cssExample2 = `
    ng-syz-button-grid {
      --cor-texto: yellow;
      --cor-texto-hover: black;
      --cor-borda: yellow;
      --cor-fundo: #005ca9;
      --cor-fundo-contraste: #005ca9;
    }
  `;

  cssExample3 = `
    ng-syz-button-grid {
      --cor-texto: yellow;
      --cor-texto-hover: black;
      --cor-borda: yellow;
      --cor-fundo: #005ca9;
      --cor-fundo-contraste: #005ca9;
    }
  `;

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--cor-texto`,
      description: 'Cor do texto no botão',
    },
    {
      name: `--cor-texto-hover`,
      description: 'Cor de fundo quando passar o mouse sobre o botão.',
    },
    {
      name: `--cor-borda`,
      description: 'Cor da borda do botão.',
    },
    {
      name: `--cor-fundo`,
      description: 'Cor do fundo do componente.',
    },
    {
      name: '--cor-fundo-contraste',
      description: 'Cor de contrate do fundo do componente.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
