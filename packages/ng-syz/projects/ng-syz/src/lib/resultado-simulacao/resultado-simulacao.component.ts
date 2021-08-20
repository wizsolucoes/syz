import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  NgSyzResultadoSimulacaoCard,
  NgSyzResultadoSimulacaoCondicao,
} from '../models';

@Component({
  selector: 'ng-syz-resultado-simulacao',
  templateUrl: './resultado-simulacao.component.html',
  styleUrls: ['./resultado-simulacao.component.scss'],
})
export class NgSyzResultadoSimulacaoComponent {
  @Input() ajudaModalidades: string;
  @Input() cards: NgSyzResultadoSimulacaoCard[];
  @Input() valor: number;
  @Input() modalidades: string[];
  @Input() condicoes: NgSyzResultadoSimulacaoCondicao[];
  @Input() corCardSelecionado = '#0169b3';
  @Input() corLinhaSelecionada = '#dfeaf2';
  @Input() corBotaoClicado = '#dc7700';
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

  selecionarCard(index): void {
    if (this.cardIdSelecionadoAnteriormente) {
      document
        .getElementById(this.cardIdSelecionadoAnteriormente)
        .classList.remove('card-selecionado');
    }
    const id = `card${index}`;
    document.getElementById(id).classList.add('card-selecionado');
    this.cardIdSelecionadoAnteriormente = id;
    this.enviarCardSelecionado.emit(index);
  }

  selecionarModalidade(modalidade): void {
    this.enviarModalidadeSelecionada.emit(modalidade);
  }
}
