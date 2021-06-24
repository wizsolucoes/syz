import { Component } from '@angular/core';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-login-with-carousel-flow',
  templateUrl: './docs-login-with-carousel-flow.component.html',
  styleUrls: ['./docs-login-with-carousel-flow.component.scss'],
})
export class DocsLoginWithCarouselFlowComponent {
  importCode = `
  import { NgSyzLoginWithCarouselFlowModule } from '@wizsolucoes/ng-syz';';
  `;

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--syz-login-with-carousel-content-login-background-color:`,
      description: 'Cor de fundo do conteúdo de login',
    },
    {
      name: `--syz-login-with-carousel-slide-background-color`,
      description: 'Cor de fundo do container com slides',
    },
    {
      name: `--syz-login-with-carousel-button-color`,
      description: 'Cor dos botões',
    },
    {
      name: `--syz-login-with-carousel-button-color-dark`,
      description: 'Cor secundária para o hover',
    },
  ];

  htmlExampleCode = `
  <ng-syz-login-with-carousel-flow
      [productLogo]="exampleProductLogo"
      [slides]="exampleSlides"
      [signUpPath]="'/components/examples/login-with-carousel-flow-example-one'"
      [forgotPasswordPath]="
          '/components/examples/login-with-carousel-flow-example-one'
      "
  ></ng-syz-login-with-carousel-flow>
  `;

  cssExample1Code = `
  ng-syz-login-with-carousel-flow {
    --syz-login-with-carousel-content-login-background-color: #D7DBDE;
    --syz-login-with-carousel-slide-background-color: #FF9100 ;
    --syz-login-with-carousel-button-color: gray;
    --syz-login-with-carousel-button-color-dark: gray;
  }
  `;
}
