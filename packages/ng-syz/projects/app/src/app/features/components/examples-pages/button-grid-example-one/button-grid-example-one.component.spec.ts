import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGridExampleOneComponent } from './button-grid-example-one.component';

describe('ButtonGridExampleOneComponent', () => {
  let component: ButtonGridExampleOneComponent;
  let fixture: ComponentFixture<ButtonGridExampleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonGridExampleOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGridExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
