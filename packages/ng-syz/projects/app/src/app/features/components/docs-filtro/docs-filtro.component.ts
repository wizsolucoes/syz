import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-filtro',
  templateUrl: './docs-filtro.component.html',
  styleUrls: ['./docs-filtro.component.scss']
})
export class DocsFiltroComponent {
  description = `Este componente é usado para criar um filtro dinâmico que comporta n filtros dos tipos slider e checkbox. Para utilizá-lo, basta
  passar como input os possíveis valores para as checkboxes e/ou sliders.`;

  importCode =
    'import { NgSyzResultadoSimulacaoModule } from "projects/ng-syz/src/public-api"';

  showFilterValues(values): void {
    alert(JSON.stringify(values));
  }

  // exemplo 1
  htmlExampleCode1: string;
  tsExampleCode1: string;
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

  // exemplo 2
  htmlExampleCode2: string;
  tsExampleCode2: string;
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

}
