import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSyzLoginWithCardsFlowModule } from '@wizsolucoes/ng-syz';

import { LoginWithCardsFlowExampleTwoComponent } from './login-with-cards-flow-example-two.component';

describe('LoginWithCardsFlowExampleTwoComponent', () => {
  let component: LoginWithCardsFlowExampleTwoComponent;
  let fixture: ComponentFixture<LoginWithCardsFlowExampleTwoComponent>;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {
    mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        NgSyzLoginWithCardsFlowModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      declarations: [LoginWithCardsFlowExampleTwoComponent],
      providers: [{ provide: MatSnackBar, useValue: mockSnackBar }],
    }).compileComponents();
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
