import { Component, OnInit } from '@angular/core';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-faq',
  templateUrl: './docs-faq.component.html',
  styleUrls: ['./docs-faq.component.scss']
})
export class DocsFaqComponent implements OnInit {

  public showToggleTest: boolean;

  public mockDataCategorys = [
    {id: 1, title: 'Categoria 1 @@@@@@@@@@@@@@@@@'},
    {id: 2, title: 'Categoria 2'},
    {id: 3, title: 'Categoria 3'},
    {id: 4, title: 'Categoria 4'},
    {id: 5, title: 'Categoria 5'}
  ];

  public mockContentCategorySelected: any;

  public mockData = [
    {
      id: 1,
      title: 'Categoria 1',
      description: 'Descrição da categoria 1',
      itens: [
        { question: 'Dúvida 1', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { question: 'Dúvida 2', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { question: 'Dúvida 3', answer: 'Resposta 3' },
        { question: 'Dúvida 4', answer: 'Resposta 4' }
      ]
    },
    {
      id: 2,
      title: 'Categoria 2',
      description: 'Descrição da categoria 2',
      itens: [
        { question: 'Dúvida 1', answer: 'Resposta 1' },
      ]
    },
    {
      id: 3,
      title: 'Categoria 3',
      description: 'Descrição da categoria 3',
      itens: []
    },
    {
      id: 4,
      title: 'Categoria 4',
      description: 'Descrição da categoria 4',
      itens: [
        { question: 'Dúvida 1', answer: 'Resposta 1' },
        { question: 'Dúvida 2', answer: 'Resposta 2' }
      ]
    },
    {
      id: 5,
      title: 'Categoria 5',
      description: 'Descrição da categoria 5',
      itens: []
    },
  ];

  componentProps: ComponentProps[] = [
    {
      name: `@Input() data: any`,
      description: 'Data.',
    },
    {
      name: '@Input() simpleDescription: boolean',
      description: 'Controla os subitens da questão',
    },
  ];

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--primary-color`,
      description: 'Cor do início do gradiente do fundo do componente',
    }
  ];

  htmlExampleCode = `
  <ng-syz-faq [data]="mockData" [simpleDescription]="false"></ng-syz-faq>
  `;

  tsExampleCode = `tsExampleCode`;

  cssExampleCode = `cssExampleCode`;

  constructor() { }

  ngOnInit(): void {
    this.mockContentCategorySelected = this.mockData[0];
    // this.mockContentCategorySelected = null;
  }

  public categorySelected(event): void {
    this.mockContentCategorySelected = this.mockData.find(x => x.id === event.id);
    console.log('Categoria recebida pra enviar pra api:', event);
  }

  public showToggle(): void {
    this.showToggleTest = !this.showToggleTest;
  }
}
