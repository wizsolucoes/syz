import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-syz-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
})
export class NgSyzAsideMenuComponent implements OnInit {

  @Input() navItems: NavItem;
  expanded: boolean = true;
  showNav = false;
  isMenuOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSidenavClick(): void {
    console.log('kjansnaksjn')
    this.isMenuOpen = false;
  }

}
