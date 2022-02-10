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
  let template: HTMLElement;

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
    template = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onCaptchaResolved', () => {
    it('should set disableSubmitButton to false', () => {
      // Given
      component.disableSubmitButton = true;

      // When
      component.onCaptchaResolved('any');

      // Then
      expect(component.disableSubmitButton).toBeFalse();
    });
  });

  describe('UI integration tests', () => {
    describe('ng-syz-login-with-cards-flow', () => {
      let element: HTMLElement;

      beforeEach(() => {
        element = template.querySelector('ng-syz-login-with-cards-flow');
      });

      it('should be created', () => {
        expect(element).toBeTruthy();
      });

      it("should invoke onCaptchaResolved on 'captchaResolved' event", () => {
        // Given
        spyOn(component, 'onCaptchaResolved');

        // When
        element.dispatchEvent(new Event('captchaResolved'));

        // Then
        expect(component.onCaptchaResolved).toHaveBeenCalled();
      });
    });
  });
});
