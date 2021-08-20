import { Component, OnInit } from '@angular/core';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-aside-menu',
  templateUrl: './docs-aside-menu.component.html',
  styleUrls: ['./docs-aside-menu.component.scss'],
})
export class DocsAsideMenuComponent implements OnInit {

  ngOnInit(): void { }

  navItems = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: '/',
    },
    {
      displayName: 'Minha conta',
      iconName: 'person',
      route: '',
      children: [
        {
          displayName: 'Wallet',
          iconName: 'shopping_cart',
          route: 'wallet',
        },
        {
          displayName: 'Meus dados',
          iconName: 'sentiment_satisfied_alt',
          route: 'minha-conta',
        },
      ]
    },
  ];

  navItems2 = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: '/',
    },
    {
      displayName: 'Minha conta',
      iconName: 'person',
      route: '',
      children: [
        {
          displayName: 'Wallet',
          iconName: 'account_balance_wallet',
          route: '',
          children: [
            {
              displayName: 'Meus produtos',
              iconName: 'shopping_cart',
              route: 'minha-conta',
            },
          ]
        },
        {
          displayName: 'Meus dados',
          iconName: 'sentiment_satisfied_alt',
          route: 'minha-conta',
        },
      ]
    },
  ];

  importCode = `
  import { NgSyzAsideMenuModule } from '@wizsolucoes/ng-syz';
  `;

  componentProps: ComponentProps[] = [
    {
      name: `@Input() navItems:NavItem[] `,
      description: 'Array de menu do tipo NavItem.',
    },

  ];

  htmlExampleCode = `
    <ng-syz-aside-menu 
    [navItems]="navItems">
    </ng-syz-aside-menu>
  `;

  tsExampleCode = `
  navItems:NavItem =[
    {
      displayName: 'Home',
      iconName: 'home',
      route: '/',
    },
    {
      displayName: 'Minha conta',
      iconName: 'person',
      route: '',
      children: [
        {
          displayName: 'Wallet',
          iconName: 'shopping_cart',
          route: 'wallet',
        },
        {
          displayName: 'Meus dados',
          iconName: 'sentiment_satisfied_alt',
          route: 'minha-conta',
        },
      ]
    },
  ];
  `;

  htmlExampleCode2 = `
  <ng-syz-aside-menu  
    [navItems]="navItems">
    </ng-syz-aside-menu>
  `;

  tsExampleCode2 = `
  navItems: NavItem = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: '/',
    },
    {
      displayName: 'Minha conta',
      iconName: 'person',
      route: '',
      children: [
        {
          displayName: 'Wallet',
          iconName: 'account_balance_wallet',
          route: '',
          children: [
            {
              displayName: 'Meus produtos',
              iconName: 'shopping_cart',
              route: 'minha-conta',
            },
          ]
        },
        {
          displayName: 'Meus dados',
          iconName: 'sentiment_satisfied_alt',
          route: 'minha-conta',
        },
      ]
    },
  ];
  `;

  constructor() { }
}
