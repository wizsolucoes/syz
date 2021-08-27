import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  label: string;
}

export interface MenuButton{
  icon: string;
  tooltip: string;
}

@Component({
  selector: 'ng-syz-app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NgSyzNavbarComponent implements OnInit {

menuButtons: MenuButton[] = [
  {
    icon: 'logout',
    tooltip: 'Sair'
  },
  {
    icon: 'notifications',
    tooltip: 'Alerta'
  }
]

 menuItems: MenuItem[] = [
    {
      label: 'Início'
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
    {
      label: 'Documentos'
    },
    {
      label: 'Dúvidas'
    }  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
