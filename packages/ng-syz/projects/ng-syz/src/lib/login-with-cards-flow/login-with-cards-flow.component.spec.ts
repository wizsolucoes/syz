import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { RecaptchaModule } from 'ng-recaptcha';
import { NgSyzLoginWithCardsFlowComponent } from './login-with-cards-flow.component';

describe('NgSyzLoginWithCardsFlowComponent', () => {
  let component: NgSyzLoginWithCardsFlowComponent;
  let fixture: ComponentFixture<NgSyzLoginWithCardsFlowComponent>;
  let template: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgSyzLoginWithCardsFlowComponent],
        imports: [
          CommonModule,
          RouterTestingModule,
          MatButtonModule,
          MatCardModule,
          MatInputModule,
          FormsModule,
          ReactiveFormsModule,
          NoopAnimationsModule,
          RecaptchaModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzLoginWithCardsFlowComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('loginUser', () => {
    it('should emit loginButtonClick event with username and password when form is valid', () => {
      // Given
      const credentials = {
        username: 'example@email.com',
        password: '12345678',
      };
      const username = 'Username';
      const password = 'Password';

      component.ngOnInit();

      spyOn(component.loginButtonClick, 'emit');

      component.loginFormGroup.get(username).setValue(credentials.username);
      component.loginFormGroup.get(password).setValue(credentials.password);
      // When
      component.loginUser();

      // Then
      expect(component.loginButtonClick.emit).toHaveBeenCalledWith(credentials);
    });

    it('should NOT emit loginButtonClick event when form is INVALID', () => {
      // Given
      const credentials = {
        username: 'example@email.com',
        password: '',
      };
      const username = 'Username';
      const password = 'Password';

      component.ngOnInit();

      spyOn(component.loginButtonClick, 'emit');

      component.loginFormGroup.get(username).setValue(credentials.username);
      component.loginFormGroup.get(password).setValue(credentials.password);
      // When
      component.loginUser();

      // Then
      expect(component.loginButtonClick.emit).not.toHaveBeenCalled();
    });
  });

  describe('signUpUser', () => {
    it('should emit signUpButtonClick event with NgSyzSignUpCredentials when form is VALID', () => {
      // Given
      const ngSyzSignUpCredentials = {
        name: 'name',
        cpf: '36717402059',
        email: 'example@email.com',
        cellphone: '000000000',
        password: '1234567',
        confirmPassword: '1234567',
      };

      const name = 'name';
      const cpf = 'cpf';
      const email = 'email';
      const cellphone = 'cellphone';
      const password = 'password';
      const confirmPassword = 'confirmPassword';

      component.ngOnInit();

      spyOn(component.signUpButtonClick, 'emit');

      component.signUpForm.get(name).setValue(ngSyzSignUpCredentials.name);
      component.signUpForm.get(cpf).setValue(ngSyzSignUpCredentials.cpf);
      component.signUpForm.get(email).setValue(ngSyzSignUpCredentials.email);
      component.signUpForm
        .get(cellphone)
        .setValue(ngSyzSignUpCredentials.cellphone);
      component.signUpForm
        .get(password)
        .setValue(ngSyzSignUpCredentials.password);
      component.signUpForm
        .get(confirmPassword)
        .setValue(ngSyzSignUpCredentials.confirmPassword);
      // When
      component.matchPassword(null);
      component.signUpUser();
      // Then
      expect(component.signUpButtonClick.emit).toHaveBeenCalledWith(
        ngSyzSignUpCredentials
      );
    });
    it('should NOT emit signUpButtonClick event when form is INVALID', () => {
      // Given
      const ngSyzSignUpCredentials = {
        name: '',
        cpf: '',
        email: '',
        cellphone: '',
        password: '',
        confirmPassword: '',
      };

      const name = 'name';
      const cpf = 'cpf';
      const email = 'email';
      const cellphone = 'cellphone';
      const password = 'password';
      const confirmPassword = 'confirmPassword';

      component.ngOnInit();

      spyOn(component.signUpButtonClick, 'emit');

      component.signUpForm.get(name).setValue(ngSyzSignUpCredentials.name);
      component.signUpForm.get(cpf).setValue(ngSyzSignUpCredentials.cpf);
      component.signUpForm.get(email).setValue(ngSyzSignUpCredentials.email);
      component.signUpForm
        .get(cellphone)
        .setValue(ngSyzSignUpCredentials.cellphone);
      component.signUpForm
        .get(password)
        .setValue(ngSyzSignUpCredentials.password);
      component.signUpForm
        .get(confirmPassword)
        .setValue(ngSyzSignUpCredentials.confirmPassword);
      // When
      component.matchPassword(null);
      component.cpfValidator();
      component.signUpUser();
      // Then
      expect(component.signUpButtonClick.emit).not.toHaveBeenCalled();
    });
  });

  describe('resetPassword', () => {
    it('should emit resetPasswordButtonClick event with NgSyzResetPasswordCredentials', () => {
      // Given
      const NgSyzResetPasswordCredentials = {
        cpf: '000.000.000-00',
        email: 'example@email.com',
      };
      const cpf = 'cpf';
      const email = 'email';

      component.ngOnInit();
      component.passwordResetForm.controls[cpf].setErrors(null);
      component.passwordResetForm.controls[email].setErrors(null);

      spyOn(component.resetPasswordButtonClick, 'emit');

      component.passwordResetForm
        .get(cpf)
        .setValue(NgSyzResetPasswordCredentials.cpf);
      component.passwordResetForm
        .get(email)
        .setValue(NgSyzResetPasswordCredentials.email);
      // When
      component.resetPassword();
      // Then
      expect(component.resetPasswordButtonClick.emit).toHaveBeenCalledWith(
        NgSyzResetPasswordCredentials
      );
    });
  });

  describe('emitCaptchaResolution', () => {
    it('shouuld emit a captchaResolved event', () => {
      // Given
      const resolutionToken = 'any';
      spyOn(component.captchaResolved, 'emit');

      // When
      component.emitCaptchaResolution(resolutionToken);

      // Then
      expect(component.captchaResolved.emit).toHaveBeenCalledWith(
        resolutionToken
      );
    });
  });

  describe('UI integration tests', () => {
    describe('re-captcha element', () => {
      let reCaptchaElement: HTMLElement;

      beforeEach(() => {
        reCaptchaElement = template.querySelector(
          '[data-test="captcha-element"]'
        );
      });

      it('should exist', () => {
        expect(reCaptchaElement).toBeTruthy();
      });

      it('should call emitCaptchaResolution on resolved event', () => {
        // Given
        spyOn(component, 'emitCaptchaResolution');

        // When
        reCaptchaElement.dispatchEvent(new Event('resolved'));

        // Then
        expect(component.emitCaptchaResolution).toHaveBeenCalled();
      });
    });
  });
});
