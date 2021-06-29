import { Component } from '@angular/core';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-login-with-carousel-flow',
  templateUrl: './docs-login-with-carousel-flow.component.html',
  styleUrls: ['./docs-login-with-carousel-flow.component.scss'],
})
export class DocsLoginWithCarouselFlowComponent {
  importCode = `
  import { NgSyzLoginWithCarouselFlowModule } from '@wizsolucoes/ng-syz';
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
      (loginOnClick)="onLoginUserButtonClick($event)"
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

  cssExample2Code = `
  ng-syz-login-with-carousel-flow {
    --syz-login-with-carousel-content-login-background-color: white;
    --syz-login-with-carousel-slide-background-color: #50555A ;
    --syz-login-with-carousel-button-color: #FF9100;
    --syz-login-with-carousel-button-color-dark: #F56C00;
  }
  `;

  tsExampleCode = `exampleProductLogo = {
    img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1624468276/productLogo_qce0hd.png',
    imgAlt: 'product logo',
  };

  exampleSlides = [
    {
      img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1624386129/productImg_upobfg.png',
      soon: false,
      title: 'Título 1 aqui',
      subtitle:
        'Seu texto de chamada slide 1 aqui. Seu texto de chamada slide 1 aqui. Seu texto de chamada slide 1 aqui.',
      alt: 'texto descritivo para imagem do slide',
    },
    {
      img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1624386129/productImg_upobfg.png',
      soon: false,
      title: 'Título 2 aqui',
      subtitle:
        'Seu texto de chamada slide 2 aqui. Seu texto de chamada slide 2 aqui. Seu texto de chamada slide 2 aqui.',
      alt: 'texto descritivo para imagem do slide',
    },
    {
      img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1624386129/productImg_upobfg.png',
      soon: false,
      title: 'Título 3 aqui',
      subtitle:
        'Seu texto de chamada slide 3 aqui. Seu texto de chamada slide 3 aqui. Seu texto de chamada slide 3 aqui.',
      alt: 'texto descritivo para imagem do slide',
    },
  ];

  constructor(private snackBar: MatSnackBar) {}

  onLoginUserButtonClick(value: NgSyzLoginCredentials): void {
    this.snackBar.open(
      \`Email: $\{value.username}
       Senha: $\{value.password}\`,
      'Fechar'
    );
  }`;
}
