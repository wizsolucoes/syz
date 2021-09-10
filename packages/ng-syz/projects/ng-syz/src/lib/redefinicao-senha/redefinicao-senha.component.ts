import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NgSyzRegraSenha } from '../models';

@Component({
  selector: 'ng-syz-redefinicao-senha',
  templateUrl: './redefinicao-senha.component.html',
  styleUrls: ['./redefinicao-senha.component.scss'],
})
export class NgSyzRedefinicaoSenhaComponent implements OnInit {
  @Input() emailDestinatarioCodigo;
  @Input() qtdeCaracteresSenha;
  @Input() textoBotaoSolicitarCodigo;
  @Input() textoCampoInserirCodigo;
  @Input() caractereEspecial;
  @Input() regras: NgSyzRegraSenha[];
  @Output() solicitarCodigo = new EventEmitter(true);
  @Output() alterarSenha = new EventEmitter(true);

  formNovaSenha: FormGroup;
  isTextFieldType: boolean;
  blockDiv = true;
  submitted = false;
  formCodigo: FormGroup = new FormGroup({
    codigo: new FormControl('', [Validators.required]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initConfirmarCadastroForm();
  }

  initConfirmarCadastroForm(): void {
    this.formNovaSenha = this.fb.group({
      recuperacaoDeSenha: new FormControl(true),
      codigoVerificacao: new FormControl('', [Validators.minLength(6)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(this.qtdeCaracteresSenha),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(this.qtdeCaracteresSenha),
      ]),
    });
    this.formNovaSenha.setValidators(this.senhaValidator());
  }

  private senhaValidator(): ValidatorFn {
    return (group: FormGroup): ValidationErrors => {
      const passwordString = 'password';
      const password = group.controls[passwordString];

      const confirmPasswordString = 'confirmPassword';
      const confirmPassword = group.controls[confirmPasswordString];
      if (this.caractereEspecial) {
        if (!password.value.includes(this.caractereEspecial)) {
          password.setErrors({ invalid: true });
        }
      }

      if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ passwordNotEquivalent: true });
      }
      return;
    };
  }

  recoverPassword(): void {
    this.solicitarCodigo.emit(this.emailDestinatarioCodigo);
    this.submitted = true;
  }

  redefinirSenha(): void {
    this.blockDiv = false;
    const codigoVerificacaoString = 'codigoVerificacao';
    const codigoString = 'codigo';
    this.formNovaSenha.controls[codigoVerificacaoString].setValue(
      this.formCodigo.controls[codigoString].value
    );

    const passwordString = 'password';
    const confirmPasswordString = 'confirmPassword';

    this.formNovaSenha.controls[passwordString].enable();
    this.formNovaSenha.controls[confirmPasswordString].enable();
  }

  newPassword(): void {
    if (this.blockDiv) {
      return;
    }

    const password = this.formNovaSenha.get('password')?.value;
    this.alterarSenha.emit(password);
  }

  showPassword(): void {
    this.isTextFieldType = !this.isTextFieldType;
  }
}
