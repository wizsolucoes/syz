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
      declarations: [LoginWithCardsFlowExampleOneComponent],
      providers: [{ provide: MatSnackBar, useValue: mockSnackBar }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithCardsFlowExampleOneComponent);
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
