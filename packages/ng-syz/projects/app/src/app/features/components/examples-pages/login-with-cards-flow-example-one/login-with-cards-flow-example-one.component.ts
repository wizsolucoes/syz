import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgSyzLoginCredentials } from '@wizsolucoes/ng-syz';

@Component({
  selector: 'app-login-with-cards-flow-example-one',
  templateUrl: './login-with-cards-flow-example-one.component.html',
  styleUrls: ['./login-with-cards-flow-example-one.component.scss'],
})
export class LoginWithCardsFlowExampleOneComponent {
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

  constructor(private snackBar: MatSnackBar) {}

  onButtonClick(value: NgSyzLoginCredentials): void {
    this.snackBar.open(
      `Email: ${value.username}
       Senha: ${value.password}`,
      'Fechar'
    );
  }
}
