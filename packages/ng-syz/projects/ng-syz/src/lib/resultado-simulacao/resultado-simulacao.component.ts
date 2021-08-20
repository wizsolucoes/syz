import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ng-syz-resultado-simulacao',
  templateUrl: './resultado-simulacao.component.html',
  styleUrls: ['./resultado-simulacao.component.scss'],
})
export class NgSyzResultadoSimulacaoComponent {
  @Input() ajudaModalidades: string = 'Ajuda';
  @Input() cards: Card[] = [
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
        {
          campo: 'Kill me please',
          valor: 'right now',
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
        {
          campo: 'Kill me please',
          valor: 'right now',
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
        {
          campo: "Kill me please now, I can't take it anymore",
          valor: 'right now',
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
        {
          campo: 'Kill me please',
          valor: 'right now',
        },
      ],
      selecionado: 'Renda mínima',
    },
  ];
  @Input() valor: number = 2500000;
  @Input() modalidades: string[] = ['Price', 'SAC', 'SACRE'];
  @Input() condicoes: Condicao[] = [
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
  @Input() linhaSelecionada: linhaSelecionada = 'rendaMinima';
  @Input() corCardSelecionado: string = '#0169b3';
  @Input() corLinhaSelecionada: string = '#dfeaf2';
  @Input() corBotaoClicado: string = '#dc7700';
  @Output() enviarCardSelecionado = new EventEmitter(true);
  @Output() enviarModalidadeSelecionada = new EventEmitter(true);
  cardIdSelecionadoAnteriormente: string;

  constructor() {
    document.documentElement.style.setProperty(
      '--selected-card',
      this.corCardSelecionado
    );
    document.documentElement.style.setProperty(
      '--selected-line',
      this.corLinhaSelecionada
    );
    document.documentElement.style.setProperty(
      '--selected-button',
      this.corBotaoClicado
    );
  }

  selecionarCard(cardId) {
    if (this.cardIdSelecionadoAnteriormente)
      document
        .getElementById(this.cardIdSelecionadoAnteriormente)
        .classList.remove('card-selecionado');
    document.getElementById(cardId).classList.add('card-selecionado');
    this.cardIdSelecionadoAnteriormente = cardId;
    this.enviarCardSelecionado.emit(cardId);
  }

  selecionarModalidade(modalidade) {
    this.enviarModalidadeSelecionada.emit(modalidade);
  }
}

export interface Card {
  camposCard: CamposCard[];
  selecionado: string;
}

export interface CamposCard {
  campo: string;
  valor: string;
}

export interface Condicao {
  condicao: string;
  valor: string;
  ajuda: string;
}

export type linhaSelecionada =
  | 'parcelaInicial'
  | 'parcelaFinal'
  | 'rendaMinima';
