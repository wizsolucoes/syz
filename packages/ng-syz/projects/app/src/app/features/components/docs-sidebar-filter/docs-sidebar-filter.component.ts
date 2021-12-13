import { Component } from '@angular/core';
import { Filter } from 'projects/ng-syz/build/public-api';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-sidebar-filter',
  templateUrl: './docs-sidebar-filter.component.html',
  styleUrls: ['./docs-sidebar-filter.component.scss'],
})
export class DocsFiltroComponent {
  // Exemplo XXXX
  description = `Este componente é usado para criar um filtro dinâmico que comporta n filtros dos tipos slider e checkbox. Para utilizá-lo, basta
  passar como input os possíveis valores para as checkboxes e/ou sliders.`;

  importCode = `import { NgSyzSideBarFilterModule } from '@wizsolucoes/ng-syz';`;

  htmlExampleCode1: string;
  cssExampleCode1: string;
  tsExampleCode1: string;
  htmlExampleCode2: string;
  cssExampleCode2: string;
  tsExampleCode2: string;

  filtroExemplo1: Filter[] = [
    {
      field: 'Preço',
      value: {
        min: 0,
        max: 500,
        step: 1,
        value: 50,
      },
    },
    {
      field: 'Tipo de produto',
      value: {
        values: [
          'Perfumes',
          'Bases',
          'Corretivos',
          'Batom',
          'Cílios postiços',
          'Eau de toilette',
          'Eau de parfum',
          'Coxinha',
          'Sonho de noiva',
          'Brigadeiro',
          'Pastel',
          'Macarronada',
          'Diamante',
          'Avião',
          'Tanque',
          'Planeta',
          'Galáxia',
          'Universo',
          'Nada',
          'Man',
          'Mob',
          'King',
          'God',
          'Non believer',
        ],
      },
    },
    {
      field: 'Marca',
      value: { values: ['Nike', 'Adidas', 'Honda'] },
    },
  ];

  filtroExemplo2: Filter[] = [
    {
      field: 'Idade',
      value: {
        min: 20,
        max: 75,
        step: 1,
        value: 35,
      },
    },
    {
      field: 'Altura',
      value: {
        min: 1,
        max: 2.5,
        step: 0.1,
        value: 1.5,
      },
    },
    {
      field: 'Comidas',
      value: {
        values: [
          'Picanha',
          'Maminha',
          'Alcatra',
          'Cupim',
          'Coxão mole',
          'Coxão duro',
          'Filé Mignon',
          'Salmão',
          'Cação',
        ],
      },
    },
    {
      field: 'Peso',
      value: {
        min: 40,
        max: 500,
        step: 1,
        value: 70,
      },
    },
  ];

  componentProps: ComponentProps[] = [
    {
      name: `@Input() filters: Filter[]`,
      description: 'FIltros a serem adicionados ao filtro.',
    },
    {
      name: '@Output() handleFormChange: {[string]: any}',
      description: 'Evento enviado quando algum valor do filtro é alterado',
    },
  ];

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--accent-color`,
      description: 'Cor usada nos checkboxes, separadores de filtro e sliders',
    },
    {
      name: `--card-color`,
      description: 'Cor de fundo do filtro',
    },
  ];

  constructor() {
    // exemplo 1
    this.htmlExampleCode1 = `
  <ng-syz-sidebar-filter [filters]="filtroExemplo1" (handleFormChange)="showFilterValues($event)"></ng-syz-sidebar-filter>
  `;
    this.cssExampleCode1 = `
  ng-syz-sidebar-filter {
    --accent-color: darkorange;
  }
  `;
    this.tsExampleCode1 = `
  filtroExemplo1 = [
    {
      field: 'Preço',
      value: {
        min: 0,
        max: 500,
        step: 1,
        value: 50,
      },
    },
    {
      field: 'Tipo de produto',
      value: {
        values: [
          'Perfumes',
          'Bases',
          'Corretivos',
          'Batom',
          'Cílios postiços',
          'Eau de toilette',
          'Eau de parfum',
          'Coxinha',
          'Sonho de noiva',
          'Brigadeiro',
          'Pastel',
          'Macarronada',
          'Diamante',
          'Avião',
          'Tanque',
          'Planeta',
          'Galáxia',
          'Universo',
          'Nada',
          'Man',
          'Mob',
          'King',
          'God',
          'Non believer',
        ],
      },
    },
    {
      field: 'Marca',
      value: { values: ['Nike', 'Adidas', 'Honda'] },
    },
  ];

  showFilterValues(values): void {
    alert(JSON.stringify(values));
  }
  `;

    // exemplo 2
    this.htmlExampleCode2 = `
  <ng-syz-sidebar-filter [filters]="filtroExemplo2" (handleFormChange)="showFilterValues($event)"></ng-syz-sidebar-filter>
  `;
    this.cssExampleCode2 = `
  ng-syz-sidebar-filter {
    --accent-color: #903ba5;
    --card-color: #9cfac1;
  }
  `;
    this.tsExampleCode2 = `
  filtroExemplo2 = [
    {
      field: 'Idade',
      value: {
        min: 20,
        max: 75,
        step: 1,
        value: 35,
      },
    },
    {
      field: 'Altura',
      value: {
        min: 1,
        max: 2.5,
        step: 0.1,
        value: 1.5,
      },
    },
    {
      field: 'Comidas',
      value: {
        values: [
          'Picanha',
          'Maminha',
          'Alcatra',
          'Cupim',
          'Coxão mole',
          'Coxão duro',
          'Filé Mignon',
          'Salmão',
          'Cação',

        ],
      },
    },
    {
      field: 'Peso',
      value: {
        min: 40,
        max: 500,
        step: 1,
        value: 70,
      },
    },
  ];

  showFilterValues(values): void {
    alert(JSON.stringify(values));
  }
  `;
  }

  showFilterValues(values): void {
    alert(JSON.stringify(values));
  }
}
