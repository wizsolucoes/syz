import { Component } from '@angular/core';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-login-with-cards-flow',
  templateUrl: './docs-login-with-cards-flow.component.html',
  styleUrls: ['./docs-login-with-cards-flow.component.scss'],
})
export class DocsLoginWithCardsFlowComponent {
  // SOBRE
  importCode = `
  import { NgSyzLoginWithCardsFlowModule } from '@wizsolucoes/ng-syz';
  `;

  // EXEMPLOS - HTML

  htmlExampleCode = `
  <ng-syz-login-with-cards-flow
    [partnerLogo]="partnerLogo"
    [businessUnitLogo]="businessUnitLogo"
    [bgLogin]="bgLogin"
    [title]="'COTAGRO'"
    [subtitle]="'Facilita solicitação e contratação de seguro agro.'"
    [cards]="cards"
    [disableSubmitButton]="disableSubmitButton"
    [reCaptchaKey]="reCaptchaKey"
    (loginButtonClick)="onLoginButtonClick($event)"
    (signUpButtonClick)="onSignUpButtonClick($event)"
    (resetPasswordButtonClick)="onResetPasswordButtonClick($event)"
    (captchaResolved)="onCaptchaResolved($event)"
  ></ng-syz-login-with-cards-flow>
  `;

  html2ExampleCode = `
  <ng-syz-login-with-cards-flow
    [partnerLogo]="partnerLogo"
    [businessUnitLogo]="businessUnitLogo"
    [bgLogin]="bgLogin"
    [title]="'TÍTULO'"
    [subtitle]="'Adicione um subtítulo aqui.'"
    [cards]="cards"
    [disableSubmitButton]="disableSubmitButton"
    [reCaptchaKey]="reCaptchaKey"
    (loginButtonClick)="onLoginButtonClick($event)"
    (signUpButtonClick)="onSignUpButtonClick($event)"
    (resetPasswordButtonClick)="onResetPasswordButtonClick($event)"
    (captchaResolved)="onCaptchaResolved($event)"
  ></ng-syz-login-with-cards-flow>
  `;

  // EXEMPLOS - CSS

  cssExample1Code = `
  ng-syz-login-with-cards-flow {
    --accent-color: #8fc549;
    --primary-color: #fd5725;
    --business-unit-logo-align: 30px;
  }`;

  cssExample2Code = `
  ng-syz-login-with-cards-flow {
    --accent-color: #F56C00;
    --primary-color: #00AA9B;
  }`;

  // EXEMPLOS - TS

  tsExampleCode = `
  bgLogin =
  "background-image: url('https://res.cloudinary.com/dexabcezh/image/upload/v1625252921/bg-login_l82sqp.jpg');";

  partnerLogo = {
    img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1625252999/Banco_Inter_-_Login_v9ztxd.svg',
    imgAlt: 'Logo banco',
  };

  businessUnitLogo = {
    img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1625252983/Wiz_Corporate-white_uuuy6n.svg',
    imgAlt: 'Wiz Corporate Logo',
  };

  disableSubmitButton: boolean = true;

  reCaptchaKey: string = environment.reCaptcha.siteKey;z

  cards = [
    {
      img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1625253070/icon-login-1_lyikt4.svg',
      imgAlt: 'Iniciar processo de Contratação',
      text: 'Iniciar processo de contratação',
    },
    {
      img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1625253070/icon-login-2_vp29xa.svg',
      imgAlt: 'Iniciar processo de Contratação',
      text: 'Consultar informações de clientes',
    },
    {
      img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1625253071/icon-login-3_j3k4fy.svg',
      imgAlt: 'Iniciar processo de Contratação',
      text: 'Acompanhar atendimentos solicitados ou abrir novo pedido',
    },
  ];

  onLoginButtonClick(value: NgSyzLoginCredentials): void {
    this.snackBar.open(
      \`Email: $\{value.username}
       Senha: $\{value.password}\`,
      'Fechar'
    );
  }

  onSignUpButtonClick(value: NgSyzSignUpCredentials): void {
    this.snackBar.open(
      \`Nome: $\{value.name}
       Cpf: $\{value.cpf}
       Email: $\{value.email}
       Celular: $\{value.cellphone}
       Senha: $\{value.password}
       Confirmação: $\{value.confirmPassword}\`,
      'Fechar'
    );
  }

  onResetPasswordButtonClick(value: NgSyzResetPasswordCredentials): void {
    this.snackBar.open(
      \`cpf: $\{value.cpf}
       email: $\{value.email}\`,
      'Fechar'
    );
  }

  onCaptchaResolved(resolutionToken: string) {
    this.disableSubmitButton = !resolutionToken;
  }
  `;

  // API

  componentProps: ComponentProps[] = [
    {
      name: `@Input() partnerLogo: NgSyzLoginLogo`,
      description: `objeto do tipo NgSyzLoginLogo com img sendo a logo do parceiro (ex: banco inter) e imgAlt sendo o texto alternativo
        NgSyzLoginLogo {
          img: string;
          imgAlt: string;
        }`,
    },
    {
      name: `@Input() businessUnitLogo: NgSyzLoginLogo;`,
      description: `objeto do tipo NgSyzLoginLogo com img sendo a logo da unidade de negócio (ex: wiz corporate) e imgAlt sendo o texto alternativo
        NgSyzLoginLogo {
          img: string;
          imgAlt: string;
        }`,
    },
    {
      name: `@Input() bgLogin: string;`,
      description: `caminho para a imagem de fundo da tela de login. Exemplo:
      "background-image: url('https://res.cloudinary.com/dexabcezh/image/upload/v1625252921/bg-login_l82sqp.jpg');"`,
    },
    {
      name: `@Input() title: string`,
      description: `Título da página. Veja exemplos"`,
    },
    {
      name: `@Input() subtitle: string`,
      description: `Subtítulo da página. Veja exemplos"`,
    },
    {
      name: `@Input() cards: NgSyzLoginCard[];`,
      description: `Três cards do tipo NgSyzLoginCard[] que aparecem abaixo do subtítulo." Cada objeto da array recebe "{ img: caminho para o ícone, imgAlt: texto alternativo, text: texto que vai abaixo do ícone }". Veja os exemplos.`,
    },
    {
      name: `@Input() signUpPath: string;`,
      description: `String com caminha para a página de SignUp`,
    },
    {
      name: `@Input() forgotPasswordPath: string;`,
      description: `String com caminha para a página de resetar a senha`,
    },
    {
      name: `@Input() reCaptchaKey: string;`,
      description: `String com a chave pública do reCAPTCHA`,
    },
    {
      name: `@Input() disableSubmitButton: boolean;`,
      description: `Booleano qur força a desabilitação dos botões do submeter. Útil para liberar o clique do botão após tratamento do CAPTCHA.`,
    },
    {
      name: `@Output() loginButtonClick: EventEmitter<NgSyzLoginCredentials>`,
      description: `Evento emitido com o objeto NgSyzLoginCredentials quando o usuário clica no botão 'entrar' do formulário de login.
      NgSyzLoginCredentials { username: string; password: string; }`,
    },
    {
      name: `@Output() signUpButtonClick: EventEmitter<NgSyzSignUpCredentials>`,
      description: `Evento emitido com o objeto NgSyzSignUpCredentials quando o usuário clica no botão 'cadastrar' do formulário de cadastro.
      NgSyzSignUpCredentials { name: string;
        cpf: string;
        email: string;
        cellphone: string;
        password: string;
        confirmPassword: string; }`,
    },
    {
      name: `@Output() resetPasswordButtonClick: EventEmitter<NgSyzResetPasswordCredentials>`,
      description: `Evento emitido com o objeto NgSyzResetPasswordCredentials quando o usuário clica no botão 'enviar' do formulário de redefinir senha.
      NgSyzResetPasswordCredentials { cpf: string;
        email: string; }`,
    },
    {
      name: `@Output() captchaResolved: EventEmitter<string>`,
      description: `Evento emitido com o token da resolução do reCAPTCHA`,
    },
  ];

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--accent-color`,
      description:
        'Aparecerá na cor de fundo do botão "entrar" quando os campos de email e senha estiverem preenchidos corretamente',
    },
    {
      name: `--primary-color`,
      description:
        'Cor primária da aplicação. Aparecerá na borda e texto do botão "Criar usuário" ',
    },
    {
      name: `--business-unit-logo-align`,
      description:
        'Use essa propriedade para alinhar a logo da unidade de negócio com a logo do parceiro, caso necessário. Veja exemplo 1." ',
    },
  ];
}
