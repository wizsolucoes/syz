import { Component, OnInit } from '@angular/core';
 
export interface MenuItem {
  label: string;
}

export interface MenuButton {
  icon: string;
  tooltip: string;
}

@Component({
  selector: 'ng-syz-navbar',
  templateUrl: './ng-syz-navbar.component.html',
  styleUrls: ['./ng-syz-navbar.component.scss']
})
export class NgSyzNavbarComponent implements OnInit {

  backGroundColor ="#FFF";

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

  ];

  

  constructor() { }
 
  ngOnInit(): void {
  }
 
}