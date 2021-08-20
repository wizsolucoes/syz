import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

import { NgSyzResultadoSimulacaoComponent } from './resultado-simulacao.component';

describe('NgSyzResultadoSimulacaoComponent', () => {
  let component: NgSyzResultadoSimulacaoComponent;
  let fixture: ComponentFixture<NgSyzResultadoSimulacaoComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    registerLocaleData(ptBr);
    await TestBed.configureTestingModule({
      declarations: [NgSyzResultadoSimulacaoComponent],
      imports: [MatButtonToggleModule, MatIconModule, MatTooltipModule],
      providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzResultadoSimulacaoComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    component.valor = 150000;
    component.cards = [
      {
        camposCard: [
          {
            campo: 'Prazo',
            valor: '60 meses',
          },
          {
            campo: 'Parcela inicial',
            valor: 'R$ 7.040,23',
          },
          {
            campo: 'Parcela final',
            valor: 'R$ 4.452,83',
          },
          {
            campo: 'Renda mínima',
            valor: 'R$ 21.120,69',
          },
        ],
        selecionado: 'Renda mínima',
      },
      {
        camposCard: [
          {
            campo: 'Prazo',
            valor: '60 meses',
          },
          {
            campo: 'Parcela inicial',
            valor: 'R$ 7.040,23',
          },
          {
            campo: 'Parcela final',
            valor: 'R$ 4.452,83',
          },
          {
            campo: 'Renda mínima',
            valor: 'R$ 21.120,69',
          },
        ],
        selecionado: 'Renda mínima',
      },
    ];
    component.condicoes = [
      {
        condicao: 'CESH',
        valor: '10,21%',
        ajuda: 'Ajuda',
      },
      {
        condicao: 'CET',
        valor: '15,35%',
        ajuda: 'Ajuda',
      },
      {
        condicao: 'Valor bruto',
        valor: 'R$ 260.250,00',
        ajuda: 'Ajuda',
      },
    ];
    component.modalidades = ['Price', 'SAC', 'SACRE'];
    spyOn(component.enviarCardSelecionado, 'emit');
    spyOn(component.enviarModalidadeSelecionada, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event when card is clicked', () => {
    // Given
    const card: HTMLElement = template.querySelectorAll(
      '[data-test="card"]'
    )[0] as HTMLElement;

    // When
    card.click();

    // Then
    expect(component.enviarCardSelecionado.emit).toHaveBeenCalled();
  });

  it('should emit event when modalidade button is clicked', () => {
    // Given
    const modalidade: HTMLElement = template.querySelectorAll(
      '[data-test="modalidade"]'
    )[0] as HTMLElement;

    // When
    modalidade.click();

    // Then
    expect(component.enviarModalidadeSelecionada.emit).toHaveBeenCalled();
  });

  it('should display all condições com títulos e valores', () => {
    // Given
    const titulos = template.querySelectorAll('[data-test="condicoes-titulo"]');
    const valores = template.querySelectorAll('[data-test="condicoes-valor"]');

    // Then
    expect(titulos.length).toEqual(component.condicoes.length);
    expect(titulos[0].textContent).toBe(component.condicoes[0].condicao);
    expect(titulos[1].textContent).toBe(component.condicoes[1].condicao);
    expect(titulos[2].textContent).toBe(component.condicoes[2].condicao);
    expect(valores[0].textContent).toBe(component.condicoes[0].valor);
    expect(valores[1].textContent).toBe(component.condicoes[1].valor);
    expect(valores[2].textContent).toBe(component.condicoes[2].valor);
  });

  it('should display all modalidades', () => {
    // Given
    const modalidadeButtons = template.querySelectorAll(
      '[data-test="modalidade"]'
    );

    // Then
    expect(modalidadeButtons.length).toEqual(component.modalidades.length);
    expect(modalidadeButtons[0].textContent).toBe(component.modalidades[0]);
    expect(modalidadeButtons[1].textContent).toBe(component.modalidades[1]);
    expect(modalidadeButtons[2].textContent).toBe(component.modalidades[2]);
  });

  describe('should display cards data', () => {
    it('should display components cards', () => {
      // Given
      const cards = template.querySelectorAll('[data-test="card"]');

      // Then
      expect(cards.length).toEqual(component.cards.length);
    });

    it('should display cards fields and values', () => {
      // Given
      const cardCampos = template.querySelectorAll('[data-test="card-campo"]');
      const cardValores = template.querySelectorAll('[data-test="card-valor"]');

      // Then
      expect(cardCampos[0].textContent).toEqual(
        component.cards[0].camposCard[0].campo
      );
      expect(cardCampos[1].textContent).toEqual(
        component.cards[0].camposCard[1].campo
      );
      expect(cardCampos[2].textContent).toEqual(
        component.cards[0].camposCard[2].campo
      );
      expect(cardCampos[3].textContent).toEqual(
        component.cards[0].camposCard[3].campo
      );
      expect(cardValores[0].textContent).toEqual(
        component.cards[0].camposCard[0].valor
      );
      expect(cardValores[1].textContent).toEqual(
        component.cards[0].camposCard[1].valor
      );
      expect(cardValores[2].textContent).toEqual(
        component.cards[0].camposCard[2].valor
      );
      expect(cardValores[3].textContent).toEqual(
        component.cards[0].camposCard[3].valor
      );
    });

    it('should display components cards', () => {
      // Given
      const cardRows = template.querySelectorAll('[data-test="card-row"]');

      // Then
      expect(cardRows[3].classList).toContain('card-selecionado');
    });
  });
});
