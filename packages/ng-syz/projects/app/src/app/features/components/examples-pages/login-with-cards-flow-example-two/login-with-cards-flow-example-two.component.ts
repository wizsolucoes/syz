import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  NgSyzLoginCredentials,
  NgSyzResetPasswordCredentials,
  NgSyzSignUpCredentials,
} from '@wizsolucoes/ng-syz';

@Component({
  selector: 'app-login-with-cards-flow-example-two',
  templateUrl: './login-with-cards-flow-example-two.component.html',
  styleUrls: ['./login-with-cards-flow-example-two.component.scss'],
})
export class LoginWithCardsFlowExampleTwoComponent {
  bgLogin =
    "background-image: url('https://res.cloudinary.com/dexabcezh/image/upload/v1625597540/bg-login_xmzljx.jpg');";

  partnerLogo = {
    img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1625598193/logo_parceiro_yag67b.png',
    imgAlt: 'Logo do parceiro',
  };

  businessUnitLogo = {
    img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1625602591/logo_UN_xsfzwv.png',
    imgAlt: 'Logo da Unidade de negócio',
  };

  cards = [
    {
      img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1625253070/icon-login-1_lyikt4.svg',
      imgAlt: 'Texto alternativo 1',
      text: 'Text card 1. Até três linhas.',
    },
    {
      img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1625253070/icon-login-2_vp29xa.svg',
      imgAlt: 'Texto alternativo 2',
      text: 'Text card 2. Até três linhas.',
    },
    {
      img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1625253071/icon-login-3_j3k4fy.svg',
      imgAlt: 'Texto alternativo 3',
      text: 'Text card 3. Até três linhas.',
    },
  ];

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
}
