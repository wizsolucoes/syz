import { Component, OnInit } from '@angular/core';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-navbar',
  templateUrl: './docs-navbar.component.html',
  styleUrls: ['./docs-navbar.component.scss']
})
export class DocsNavbarComponent {

  componentProps: ComponentProps[] = [
    {
      name: `@Input() person: any`,
      description: 'Os dados do usuário, veja exemplo',
    },
  ];

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--primary-color`,
      description: 'Cor do início do gradiente do fundo do componente',
    }
  ];  

  htmlExampleCode = `
  <ng-syz-navbar
    [menuItems]="object.menus"
    [menuButtons]="object.buttons">
  </ng-syz-navbar>
  `;

  tsExampleCode =`
  
 menuItems: MenuItem[] = [
  {
    label: 'Iníco'
   
  },
  {
    label: 'Equipe'
 
  },
  {
    label: 'Performance'
    
  },
  {
    label: 'Gestão'
  },
  {
    label: 'Calendário'
  
  },
];

menuButtons: MenuButton[] = [
  {
    icon: 'logout',
    tooltip: 'sair',
  },
  {
    icon: 'notifications',
    tooltip:'alerta'
  },

];`;



}
