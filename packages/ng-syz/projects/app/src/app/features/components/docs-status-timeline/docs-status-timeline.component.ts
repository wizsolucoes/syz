import { Component, OnInit } from '@angular/core';
import { NgSyzStatusTimelineEntry } from '@wizsolucoes/ng-syz';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-status-timeline',
  templateUrl: './docs-status-timeline.component.html',
  styleUrls: ['./docs-status-timeline.component.scss'],
})
export class DocsTimelineComponent {
  importCode = `import { NgSyzStatusTimelineModule } from '@wizsolucoes/ng-syz';`;

  componentProps: ComponentProps[] = [
    {
      name: `@Input() data: NgSyzStatusTimelineEntry[]`,
      description: 'Dados de atualizações passadas.',
    },
    {
      name: `@Input() futureData: NgSyzStatusTimelineEntry[]`,
      description: 'Dados de etapas futuras.',
    },
    {
      name: '@Input() title: string',
      description: 'Título acima da linha de tempo',
    },
    {
      name: '@Input() isReverse: boolean',
      description:
        'Determina que a linha de tempo fique do lado direito do text',
    },
  ];

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--syz-status-timeline-size-line`,
      description: 'Tamanho da linha da status-timeline',
    },
    {
      name: `--syz-status-timeline-primary-color-text`,
      description: 'Cor primária do texto do conteudo da status-timeline',
    },
    {
      name: `--syz-status-timeline-color-simbol`,
      description: 'Cor símbolo do conteudo da status-timeline',
    },
    {
      name: `--syz-status-timeline-color-line`,
      description: 'Cor da linha da status-timeline',
    },
    {
      name: `--syz-status-timeline-padding-item`,
      description: 'Dimensões do padding',
    },
  ];

  // html example
  htmlExampleCode = `
  <ng-syz-status-timeline
    [data]="data"
    [futureData]="futureData"
    [title]="'Detalhes do andamento'"
    [isReverse]="false"
  >
  </ng-syz-status-timeline>
  `;

  tsExampleCode = `
  public data: NgSyzStatusTimelineEntry[] = [
    {
      title: 'Titulo 1',
      subtitle: 'Teste!!!',
      description: 'Detalhes 1',
      colorStatus: 'red',
    },
    {
      title: 'Titulo 2',
      subtitle: 'xx/xx/xxxx',
      description: 'Detalhes 2',
      colorStatus: 'blue',
    },
    {
      title: 'Titulo 3',
      subtitle: 'xx/xx/xxxx',
      description: 'Detalhes 3',
      colorStatus: 'yellow',
    },
    {
      title: 'Titulo 4',
      subtitle: 'xx/xx/xxxx',
      description: 'Detalhes 4',
      colorStatus: 'red',
    },
    {
      title: 'Titulo 5',
      subtitle: 'xx/xx/xxxx',
      description: 'Detalhes 5',
      colorStatus: 'pink',
    },
  ];

  public futureData: NgSyzStatusTimelineEntry[] = [
    {
      title: 'Futuro 1',
      subtitle: 'xx/xx/xxxx',
      description: 'Detalhes 1',
      colorStatus: 'red',
    },
    {
      title: 'Futuro 2',
      subtitle: 'xx/xx/xxxx',
      description: 'Detalhes 2',
      colorStatus: 'green',
    },
    {
      title: 'Futuro 5',
      subtitle: 'xx/xx/xxxx',
      description: 'Detalhes 5',
      colorStatus: 'red',
    },
  ];
  `;

  public data: NgSyzStatusTimelineEntry[] = [
    {
      title: 'Titulo 1',
      subtitle: 'Teste!!!',
      description: 'Detalhes 1',
      colorStatus: 'red',
    },
    {
      title: 'Titulo 2',
      subtitle: 'xx/xx/xxxx',
      description: 'Detalhes 2',
      colorStatus: 'blue',
    },
    {
      title: 'Titulo 3',
      subtitle: 'xx/xx/xxxx',
      description: 'Detalhes 3',
      colorStatus: 'yellow',
    },
    {
      title: 'Titulo 4',
      subtitle: 'xx/xx/xxxx',
      description: 'Detalhes 4',
      colorStatus: 'red',
    },
    {
      title: 'Titulo 5',
      subtitle: 'xx/xx/xxxx',
      description: 'Detalhes 5',
      colorStatus: 'pink',
    },
  ];

  public futureData: NgSyzStatusTimelineEntry[] = [
    {
      title: 'Futuro 1',
      subtitle: 'xx/xx/xxxx',
      description: 'Detalhes 1',
      colorStatus: 'red',
    },
    {
      title: 'Futuro 2',
      subtitle: 'xx/xx/xxxx',
      description: 'Detalhes 2',
      colorStatus: 'green',
    },
    {
      title: 'Futuro 5',
      subtitle: 'xx/xx/xxxx',
      description: 'Detalhes 5',
      colorStatus: 'red',
    },
  ];
}
