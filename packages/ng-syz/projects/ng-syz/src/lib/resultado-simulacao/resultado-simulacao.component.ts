import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ng-syz-resultado-simulacao',
  templateUrl: './resultado-simulacao.component.html',
  styleUrls: ['./resultado-simulacao.component.scss'],
})
export class NgSyzResultadoSimulacaoComponent {
  @Input() ajudaModalidades: string;
  @Input() cards: Card[];
  @Input() valor: number;
  @Input() modalidades: string[];
  @Input() condicoes: Condicao[];
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

  selecionarCard(index) {
    if (this.cardIdSelecionadoAnteriormente)
      document
        .getElementById(this.cardIdSelecionadoAnteriormente)
        .classList.remove('card-selecionado');
    var id = `card${index}`;
    document.getElementById(id).classList.add('card-selecionado');
    this.cardIdSelecionadoAnteriormente = id;
    this.enviarCardSelecionado.emit(index);
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
