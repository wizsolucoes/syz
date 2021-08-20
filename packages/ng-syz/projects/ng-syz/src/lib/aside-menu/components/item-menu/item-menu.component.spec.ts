import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ItemMenuComponent } from './item-menu.component';

describe('ItemMenuComponent', () => {
  let component: ItemMenuComponent;
  let fixture: ComponentFixture<ItemMenuComponent>;
  let template: HTMLElement;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemMenuComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  });



  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMenuComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    component.item = {
      displayName: 'Home',
      iconName: 'home',
      route: '/',
    };
    component.depth = 0;
    component.expanded = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
