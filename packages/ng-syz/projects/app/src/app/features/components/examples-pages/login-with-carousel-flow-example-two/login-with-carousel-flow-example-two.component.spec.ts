import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSyzLoginWithCarouselFlowModule } from '@wizsolucoes/ng-syz';
import { LoginWithCarouselFlowExampleTwoComponent } from './login-with-carousel-flow-example-two.component';

describe('LoginWithCarouselFlowExampleTwoComponent', () => {
  let component: LoginWithCarouselFlowExampleTwoComponent;
  let fixture: ComponentFixture<LoginWithCarouselFlowExampleTwoComponent>;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {
    mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        NgSyzLoginWithCarouselFlowModule,
        RouterTestingModule,
      ],
      declarations: [LoginWithCarouselFlowExampleTwoComponent],
      providers: [{ provide: MatSnackBar, useValue: mockSnackBar }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithCarouselFlowExampleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
