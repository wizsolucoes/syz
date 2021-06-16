import { Component } from '@angular/core';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-example-flow',
  templateUrl: './docs-example-flow.component.html',
  styleUrls: ['./docs-example-flow.component.scss'],
})
export class DocsExampleFlowComponent {
  /* Documentation */
  importCode = `
  import { NgSyzExampleFlowModule } from '@wizsolucoes/ng-syz';';
  `;

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--syz-example-flow-background-color`,
      description: 'Cor de fundo',
    },
    {
      name: `--syz-example-flow-text-color`,
      description: 'Cor do texto',
    },
  ];

  htmlExampleCode = `
  <ng-syz-example-flow></ng-syz-example-flow>
  `;

  cssExample1Code = `
  ng-syz-example-flow {
    --syz-example-flow-background-color: #00aa9b;
    --syz-example-flow-text-color: white;
  }
  `;

  cssExample2Code = `
  ng-syz-example-flow {
    --syz-example-flow-background-color: #ff9100;
    --syz-example-flow-text-color: darkblue;
  }
  `;
}
