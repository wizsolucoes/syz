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
  private navItems: NavItem[] = [
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
    {
      displayName: 'Carousel de Cards',
      route: 'cards-carousel',
    },
    {
      displayName: 'Resultado de iniciativa',
      route: 'initiative-result-card',
    },
    {
      displayName: 'Resumo de Desempenho',
      route: 'performance-summary',
    },
    {
      displayName: 'Status de checklist',
      route: 'checklist-status',
    },
    {
      displayName: 'Tabela de dados',
      route: 'data-table',
    },
    {
      displayName: 'FAQ',
      route: 'faq',
    },
    {
      displayName: 'Linha de tempo de status',
      route: 'status-timeline',
    },
    {
      displayName: 'Barra de progresso de desempenho',
      route: 'achievements-progress-bar',
    },
    {
      displayName: 'Resultado de simulação',
      route: 'simulation-result',
    },
    {
      displayName: 'Grid de botões',
      route: 'button-grid',
    },
    {
      displayName: 'Filtro de barra lateral',
      route: 'sidebar-filter',
    },
    {
      displayName: 'Redefinição de senha',
      route: 'password-reset-card',
    },
    {
      displayName: 'Tour',
      route: 'tour',
    },
  ];

  get orderedList(): NavItem[] {
    return this.navItems.sort(this.byDisplayName);
  }

  private byDisplayName(a: NavItem, b: NavItem): number {
    if (a.displayName < b.displayName) {
      return -1;
    }
    if (a.displayName > b.displayName) {
      return 1;
    }
    return 0;
  }
}
