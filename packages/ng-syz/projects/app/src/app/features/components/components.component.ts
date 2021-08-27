import { Component } from '@angular/core';

interface NavItem {
  displayName: string;
  route: string;
}

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent {
  navItems: NavItem[] = [
    { displayName: 'Busca por CPF/CNPJ', route: 'cpf-search' },
    { displayName: 'Dados pessoais', route: 'person-info' },
    {
      displayName: 'Fluxo de login com carousel',
      route: 'login-with-carousel-flow',
    },
    {
      displayName: 'Fluxo de login com cards',
      route: 'login-with-cards-flow',
    },
    { displayName: 'Nav Bar', route: 'navbar' },
  ];
}

