import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NavItem } from '../../../models';

@Component({
  selector: 'ng-syz-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)', marginLeft: '2rem', marginTop: '1.2rem' })),
      transition('expanded <=> collapsed',
        animate('320ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ],

})
export class ItemMenuComponent implements OnInit {

  @Input() item: NavItem;
  @Input() depth: number;
  expanded!: boolean;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {

  }

  onClickItem(item: NavItem, event: HTMLElement) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }
    if (item.children && item.children.length) {
      event.closest('a').classList.toggle('selected')
      this.expanded = !this.expanded;
    }
  }

}
