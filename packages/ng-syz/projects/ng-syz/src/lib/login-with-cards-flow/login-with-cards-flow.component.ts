import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {
  NgSyzLoginCredentials,
  NgSyzLoginLogo,
  NgSyzLoginCard,
  NgSyzSignUpCredentials,
  NgSyzResetPasswordCredentials,
} from '../models';

@Component({
  selector: 'ng-syz-login-with-cards-flow',
  templateUrl: './login-with-cards-flow.component.html',
  styleUrls: ['./login-with-cards-flow.component.scss'],
})
export class NgSyzLoginWithCardsFlowComponent implements OnInit {
  @Input() partnerLogo: NgSyzLoginLogo;
  @Input() businessUnitLogo: NgSyzLoginLogo;
  @Input() bgLogin: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() cards: NgSyzLoginCard[];
  @Input() signUpPath: string;
  @Input() forgotPasswordPath: string;

  @Output() loginButtonClick: EventEmitter<NgSyzLoginCredentials> =
    new EventEmitter();
  @Output() signUpButtonClick: EventEmitter<NgSyzSignUpCredentials> =
    new EventEmitter();
  @Output()
  resetPasswordButtonClick: EventEmitter<NgSyzResetPasswordCredentials> = new EventEmitter();

  loginFormGroup: FormGroup;
  signUpForm: FormGroup;
  passwordResetForm: FormGroup;

  currentForm: string = 'loginForm';
  isSubmitting = false;
  cadastrarUsuarioText = 'Cadastrar Usuário';
  codeReceived = false;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });

    this.signUpForm = this.formBuilder.group(
      {
        cpf: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(/^[0-9]*$/),
            this.cpfValidator(),
          ]),
        ],
        name: ['', [Validators.required, Validators.pattern(/^([^0-9]*)$/)]],
        email: ['', [Validators.required, Validators.email]],
        cellphone: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        organization: ['Caixa Econômica Federal'],
        cnpj: ['00360305000104'],
        profile: [2],
      },
      {
        validators: [this.matchPassword],
      }
    );

    this.passwordResetForm = this.formBuilder.group({
      cpf: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[0-9]*$/),
          this.cpfValidator(),
        ]),
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      code: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    });
  }

  loginUser(): void {
    if (this.loginFormGroup.valid) {
      this.loginButtonClick.emit({
        username: this.loginFormGroup.get('Username').value,
        password: this.loginFormGroup.get('Password').value,
      });
    }
  }

  signUpUser(): void {
    this.isSubmitting = true;
    if (this.signUpForm.valid) {
      this.isSubmitting = false;
      this.signUpButtonClick.emit({
        name: this.signUpForm.get('name').value,
        cpf: this.signUpForm.get('cpf').value,
        email: this.signUpForm.get('email').value,
        cellphone: this.signUpForm.get('cellphone').value,
        password: this.signUpForm.get('password').value,
        confirmPassword: this.signUpForm.get('confirmPassword').value,
      });
    }
  }

  resetPassword(): void {
    this.resetPasswordButtonClick.emit({
      cpf: this.passwordResetForm.get('cpf').value,
      email: this.passwordResetForm.get('email').value,
    });
  }

  // VALIDATORS

  matchPassword(control: AbstractControl): ValidationErrors | null {
    if (control) {
      const password = control.get('password').value;
      const confirmPassword = control.get('confirmPassword').value;

      if (password !== confirmPassword) {
        control.get('confirmPassword').setErrors({ passwordMismatch: true });
      } else {
        control.get('confirmPassword').setErrors(null);
      }
    }

    return null;
  }

  cpfValidator(): any {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }

      // Primeira validação
      const cpf = control.value.replace(/\D/g, '');
      if (cpf.toString().length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return { invalidCpf: true };
      }

      let result = null;

      // Segunda validação
      [9, 10].forEach((j) => {
        let soma = 0;
        let r;
        cpf
          .split(/(?=)/)
          .splice(0, j)
          .forEach((e, i) => {
            soma += Number(e) * (j + 2 - (i + 1));
          });
        r = soma % 11;
        r = r < 2 ? 0 : 11 - r;

        if (r !== Number(cpf.substring(j, j + 1))) {
          result = { invalidCpf: true };
        }
      });

      return result;
    };
  }
}
