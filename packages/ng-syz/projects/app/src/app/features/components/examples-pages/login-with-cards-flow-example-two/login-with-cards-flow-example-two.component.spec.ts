import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithCardsFlowExampleTwoComponent } from './login-with-cards-flow-example-two.component';

describe('LoginWithCardsFlowExampleTwoComponent', () => {
  let component: LoginWithCardsFlowExampleTwoComponent;
  let fixture: ComponentFixture<LoginWithCardsFlowExampleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithCardsFlowExampleTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithCardsFlowExampleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
