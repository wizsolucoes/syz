import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-hello-world',
  templateUrl: './docs-hello-world.component.html',
  styleUrls: ['./docs-hello-world.component.scss']
})
export class DocsHelloWorldComponent implements OnInit {
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
   (loginButtonClick)="onLoginButtonClick($event)"
   (signUpButtonClick)="onSignUpButtonClick($event)"
   (resetPasswordButtonClick)="onResetPasswordButtonClick($event)"
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
   (loginButtonClick)="onLoginButtonClick($event)"
   (signUpButtonClick)="onSignUpButtonClick($event)"
   (resetPasswordButtonClick)="onResetPasswordButtonClick($event)"
 ></ng-syz-login-with-cards-flow>
 `;
  constructor() { }

  ngOnInit(): void {
  }

}
