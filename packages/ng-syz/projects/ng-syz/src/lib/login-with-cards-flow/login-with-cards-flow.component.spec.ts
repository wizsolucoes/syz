import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSyzLoginWithCardsFlowComponent } from './login-with-cards-flow.component';

describe('LoginComponent', () => {
  let component: NgSyzLoginWithCardsFlowComponent;
  let fixture: ComponentFixture<NgSyzLoginWithCardsFlowComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgSyzLoginWithCardsFlowComponent],
        imports: [ReactiveFormsModule, FormsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzLoginWithCardsFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
