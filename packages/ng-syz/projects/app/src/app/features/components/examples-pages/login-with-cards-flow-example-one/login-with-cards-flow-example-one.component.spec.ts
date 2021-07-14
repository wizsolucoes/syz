import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RouterTestingModule } from '@angular/router/testing';
import { NgSyzLoginWithCardsFlowModule } from '@wizsolucoes/ng-syz';

import { LoginWithCardsFlowExampleOneComponent } from './login-with-cards-flow-example-one.component';

describe('LoginWithCardsFlowExampleOneComponent', () => {
  let component: LoginWithCardsFlowExampleOneComponent;
  let fixture: ComponentFixture<LoginWithCardsFlowExampleOneComponent>;
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
      declarations: [LoginWithCardsFlowExampleOneComponent],
      providers: [{ provide: MatSnackBar, useValue: mockSnackBar }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithCardsFlowExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
