import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  NgSyzLoginCredentials,
  NgSyzResetPasswordCredentials,
  NgSyzSignUpCredentials,
} from '@wizsolucoes/ng-syz';
import { environment } from 'projects/app/src/environments/environment';

@Component({
  selector: 'app-login-with-cards-flow-example-one',
  templateUrl: './login-with-cards-flow-example-one.component.html',
  styleUrls: ['./login-with-cards-flow-example-one.component.scss'],
})
export class LoginWithCardsFlowExampleOneComponent {
  bgLogin = `background-image: url('https://res.cloudinary.com/dexabcezh/image/upload/v1625252921/bg-login_l82sqp.jpg');`;

  partnerLogo = {
    img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1625252999/Banco_Inter_-_Login_v9ztxd.svg',
    imgAlt: 'Logo banco',
  };

  businessUnitLogo = {
    img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1625252983/Wiz_Corporate-white_uuuy6n.svg',
    imgAlt: 'Wiz Corporate Logo',
  };

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

  disableSubmitButton: boolean = true;

  reCaptchaKey: string = environment.reCaptcha.siteKey;

  constructor(private snackBar: MatSnackBar) {}

  onLoginButtonClick(value: NgSyzLoginCredentials): void {
    this.snackBar.open(
      `Email: ${value.username}
       Senha: ${value.password}`,
      'Fechar'
    );
  }

  onSignUpButtonClick(value: NgSyzSignUpCredentials): void {
    this.snackBar.open(
      `Nome: ${value.name}
       Cpf: ${value.cpf}
       Email: ${value.email}
       Celular: ${value.cellphone}
       Senha: ${value.password}
       Confirmação: ${value.confirmPassword}`,
      'Fechar'
    );
  }

  onResetPasswordButtonClick(value: NgSyzResetPasswordCredentials): void {
    this.snackBar.open(
      `cpf: ${value.cpf}
       email: ${value.email}`,
      'Fechar'
    );
  }

  onCaptchaResolved(resolutionToken: string) {
    this.disableSubmitButton = !resolutionToken;
  }
}
