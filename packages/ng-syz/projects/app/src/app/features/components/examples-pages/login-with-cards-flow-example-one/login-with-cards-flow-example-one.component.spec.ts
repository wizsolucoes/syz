import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginWithCardsFlowExampleOneComponent } from './login-with-cards-flow-example-one.component';

describe('LoginWithCardsFlowExampleOneComponent', () => {
  let component: LoginWithCardsFlowExampleOneComponent;
  let fixture: ComponentFixture<LoginWithCardsFlowExampleOneComponent>;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {
    mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
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
