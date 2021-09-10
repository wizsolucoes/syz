import { Component, OnInit } from '@angular/core';
import { NgSyzTimeline } from 'projects/ng-syz/build/public-api';
import { ComponentProps } from '../../../shared/models/component-props.interface';


@Component({
  selector: 'app-docs-timeline',
  templateUrl: './docs-timeline.component.html',
  styleUrls: ['./docs-timeline.component.scss']
})
export class DocsTimelineComponent implements OnInit {

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
      name: `--syz-timeline-size-line`,
      description: 'Tamanho da linha da timeline',
    },
    {
      name: `--syz-timeline-primary-color-text`,
      description: 'Cor primária do texto do conteudo da timeline',
    },
    {
      name: `--syz-timeline-color-simbol`,
      description: 'Cor símbolo do conteudo da timeline',
    },
    {
      name: `--syz-timeline-color-line`,
      description: 'Cor da linha da timeline',
    },
    {
      name: `--syz-timeline-padding-item`,
      description: 'Dimensões do padding',
    }
  ];

  htmlExampleCode = `
  <ng-syz-faq [data]="mockData" [simpleDescription]="false"></ng-syz-faq>
  `;

  tsExampleCode = `tsExampleCode`;

  cssExampleCode = `cssExampleCode`;

  public data: NgSyzTimeline[] = [
    { title: 'Titulo 1', subtitle: 'Teste!!!', description: 'Detalhes 1', colorStatus: 'red'},
    { title: 'Titulo 2', subtitle: 'xx/xx/xxxx', description: 'Detalhes 2', colorStatus: 'blue'},
    { title: 'Titulo 3', subtitle: 'xx/xx/xxxx', description: 'Detalhes 3', colorStatus: 'yellow'},
    { title: 'Titulo 4', subtitle: 'xx/xx/xxxx', description: 'Detalhes 4', colorStatus: 'red'},
    { title: 'Titulo 5', subtitle: 'xx/xx/xxxx', description: 'Detalhes 5', colorStatus: 'pink'},
  ];

  public futureData: NgSyzTimeline[] = [
    { title: 'Futuro 1', subtitle: 'xx/xx/xxxx', description: 'Detalhes 1', colorStatus: 'red'},
    { title: 'Futuro 2', subtitle: 'xx/xx/xxxx', description: 'Detalhes 2', colorStatus: 'green'},
    { title: 'Futuro 5', subtitle: 'xx/xx/xxxx', description: 'Detalhes 5', colorStatus: 'red' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
