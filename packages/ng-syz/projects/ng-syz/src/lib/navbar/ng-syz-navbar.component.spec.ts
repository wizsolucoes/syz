import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSyzNavbarComponent } from './ng-syz-navbar.component';

describe('NgSyzNavbarComponent', () => {
  let component: NgSyzNavbarComponent;
  let fixture: ComponentFixture<NgSyzNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSyzNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
