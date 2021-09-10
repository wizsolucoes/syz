import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgSyzResultadoSimulacaoModule } from 'projects/ng-syz/src/public-api';
import { SharedModule } from '../../../shared/shared.module';

import { DocsResultadoSimulacaoComponent } from './docs-resultado-simulacao.component';

describe('DocsResultadoSimulacaoComponent', () => {
  let component: DocsResultadoSimulacaoComponent;
  let fixture: ComponentFixture<DocsResultadoSimulacaoComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsResultadoSimulacaoComponent],
      imports: [
        SharedModule,
        NoopAnimationsModule,
        NgSyzResultadoSimulacaoModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsResultadoSimulacaoComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;

    component.cardsExemplo1 = [
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

    (component.condicoesExemplo1 = [
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
    ]),
      (component.modalidadesExemplo1 = ['Price', 'SAC', 'SACRE']);

    component.cardsExemplo2 = component.cardsExemplo1;
    spyOn(component, 'enviarCardSelecionado');
    spyOn(component, 'enviarModalidadeSelecionada');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid description', () => {
    const description = component.description;
    expect(description).not.toBeNull();
  });

  it('should have valid example values when initialize component', () => {
    component.htmlExampleCode1 = '';
    component.tsExampleCode1 = '';

    const htmlExampleCode1 = component.htmlExampleCode1;
    const tsExampleCode1 = component.tsExampleCode1;

    expect(htmlExampleCode1).toEqual('');
    expect(tsExampleCode1).toEqual('');

    component.initExampleVariables();

    expect(htmlExampleCode1).not.toBeNull();
    expect(tsExampleCode1).not.toBeNull();
  });
});
