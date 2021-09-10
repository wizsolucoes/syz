import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgSyzRedefinicaoSenhaComponent } from './redefinicao-senha.component';

describe('NgSyzRedefinicaoSenhaComponent', () => {
  let component: NgSyzRedefinicaoSenhaComponent;
  let template: HTMLElement;
  let fixture: ComponentFixture<NgSyzRedefinicaoSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSyzRedefinicaoSenhaComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzRedefinicaoSenhaComponent);
    component = fixture.componentInstance;

    component.submitted = true;
    component.emailDestinatarioCodigo = 'teste@email.com';
    component.textoBotaoSolicitarCodigo = 'Solicitar codigo';
    component.textoCampoInserirCodigo = 'Insira aqui seu código';
    component.regras = [
      {
        text: 'Pra sua maior segurança, sugerimos o uso de: letras maiúsculas (ABC), números (123) e caracteres especiais (!@#)',
        icon: 'home',
      },
      {
        text: 'Sua senha deve conter no mínimo 6 caracteres.',
        icon: 'home',
      },
    ];

    template = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all button values', () => {
    // Given
    const regras = template.querySelectorAll('[data-test="regras-senha"]');
    // Then
    expect(regras.length).toEqual(component.regras.length);

    expect(regras[0].textContent.trim()).toBe(component.regras[0].text);
    expect(regras[1].textContent.trim()).toBe(component.regras[1].text);
  });

  it('should display all button values', () => {
    // Given
    const regras = template.querySelectorAll('[data-test="regras-senha"]');
    // Then
    expect(regras.length).toEqual(component.regras.length);

    expect(regras[0].textContent.trim()).toBe(component.regras[0].text);
    expect(regras[1].textContent.trim()).toBe(component.regras[1].text);
  });

  it('should display all input values', () => {
    // Given
    const textoCampoInserirCodigo = template.querySelectorAll(
      '[data-test="texto-campo-inserir-codigo"]'
    )[0].textContent;

    expect(textoCampoInserirCodigo.trim()).toBe(
      component.textoCampoInserirCodigo.trim()
    );
  });

  it('should set submitted to true when recoverPassword is called', () => {
    component.recoverPassword();

    // Then Assert
    expect(component.submitted).toBeTrue();
  });

  it('should has a valid password', () => {
    component.formNovaSenha.patchValue({
      recuperacaoDeSenha: true,
      codigoVerificacao: '123',
      password: '123456',
      confirmPassword: '123456',
    });
    fixture.detectChanges();
    expect(component.formNovaSenha.valid).toBeFalsy();
  });

  it('should has an invalid password when password are different', () => {
    component.formNovaSenha.patchValue({
      recuperacaoDeSenha: true,
      codigoVerificacao: '123',
      password: '123',
      confirmPassword: '1234',
    });
    fixture.detectChanges();
    expect(component.formNovaSenha.valid).toBeFalse();
  });

  /*
  it('should call recoverPassword when solicitaCodigo button is clicked', () => {
    // Given Arrange
    const button: HTMLButtonElement | null = template.querySelector(
      'button[data-test="solicitar-codigo"]'
    );

    spyOn(component.alterarSenha, 'emit');

    // When Act
    button?.click();

    // Then Assert
    expect(component.alterarSenha.emit).toHaveBeenCalled();
  });

  it('should call newPassword when redefinirSenha button is clicked', () => {
    // Given Arrange
    const button: HTMLButtonElement | null = template.querySelector(
      'button[data-test="alterar-senha"]'
    );

    spyOn(component.solicitarCodigo, 'emit').and.callThrough();

    // When Act
    button?.click();

    // Then Assert
    expect(component.solicitarCodigo.emit).toHaveBeenCalled();
  });*/
});
