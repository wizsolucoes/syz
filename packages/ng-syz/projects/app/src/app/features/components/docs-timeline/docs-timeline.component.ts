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
      name: `--primary-color`,
      description: 'Cor do início do gradiente do fundo do componente',
    }
  ];

  htmlExampleCode = `
  <ng-syz-faq [data]="mockData" [simpleDescription]="false"></ng-syz-faq>
  `;

  tsExampleCode = `tsExampleCode`;

  cssExampleCode = `cssExampleCode`;

  public data: NgSyzTimeline[] = [
    { title: 'Titulo 1', subtitle: 'xx/xx/xxxx', description: 'Detalhes 1' },
    { title: 'Titulo 2', subtitle: 'xx/xx/xxxx', description: 'Detalhes 2' },
    { title: 'Titulo 3', subtitle: 'xx/xx/xxxx', description: 'Detalhes 3' },
    { title: 'Titulo 4', subtitle: 'xx/xx/xxxx', description: 'Detalhes 4' },
    { title: 'Titulo 5', subtitle: 'xx/xx/xxxx', description: 'Detalhes 5' },
    { title: 'Titulo 6', subtitle: 'xx/xx/xxxx', description: 'Detalhes 6' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
