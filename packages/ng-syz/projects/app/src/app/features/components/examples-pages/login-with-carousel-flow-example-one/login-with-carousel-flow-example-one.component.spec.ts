import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSyzLoginWithCarouselFlowModule } from '@wizsolucoes/ng-syz';
import { LoginWithCarouselFlowExampleOneComponent } from './login-with-carousel-flow-example-one.component';

describe('LoginWithCarouselFlowExampleOneComponent', () => {
  let component: LoginWithCarouselFlowExampleOneComponent;
  let fixture: ComponentFixture<LoginWithCarouselFlowExampleOneComponent>;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {
    mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        NgSyzLoginWithCarouselFlowModule,
        RouterTestingModule,
      ],
      declarations: [LoginWithCarouselFlowExampleOneComponent],
      providers: [{ provide: MatSnackBar, useValue: mockSnackBar }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithCarouselFlowExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
