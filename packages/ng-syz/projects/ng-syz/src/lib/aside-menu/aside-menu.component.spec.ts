import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSyzAsideMenuComponent } from './aside-menu.component';
import { ItemMenuComponent } from './components/item-menu/item-menu.component';

describe('NgSyzAsideMenuComponent', () => {
  let component: NgSyzAsideMenuComponent;
  let fixture: ComponentFixture<NgSyzAsideMenuComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSyzAsideMenuComponent],
      providers: [ItemMenuComponent],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzAsideMenuComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    component.navItems = [{
      displayName: 'Home',
      iconName: 'home',
      route: '/',
    }];
    component.expanded = false;
    component.isMenuOpen = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should display person data', () => {
    it('should diplay Aside Menu', () => {
      const sidebar = template.querySelector('[data-sidebar]');
      expect(sidebar.innerHTML).toBeTrue;
    });

  });

});
