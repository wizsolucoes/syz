import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  importCode = `
  import { NgSyzCpfSearchModule } from '@wizsolucoes/ng-syz';
  …
  @NgModule ({....
    imports: [...,
    NgSyzCpfSearchModule,
  …]
  })
  `;

  addSelectorCode = `
  <ng-syz-cpf-search [message]="'Acompanhe seus pedidos!'"></ng-syz-cpf-search>
  `;
}
