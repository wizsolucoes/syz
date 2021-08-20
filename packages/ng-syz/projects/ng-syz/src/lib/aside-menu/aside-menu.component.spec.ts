import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSyzAsideMenuComponent } from './aside-menu.component';

describe('NgSyzAsideMenuComponent', () => {
  let component: NgSyzAsideMenuComponent;
  let fixture: ComponentFixture<NgSyzAsideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSyzAsideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzAsideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
