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
  @Output() enviarCardSelecionado = new EventEmitter(true);
  @Output() enviarModalidadeSelecionada = new EventEmitter(true);
  cardIdSelecionadoAnteriormente: string;

  selecionarCard(index, idLetter): void {
    if (this.cardIdSelecionadoAnteriormente) {
      document
        .getElementById(this.cardIdSelecionadoAnteriormente)
        .classList.remove('card-selecionado');
    }
    const id = `card${idLetter + index}`;
    document.getElementById(id).classList.add('card-selecionado');
    this.cardIdSelecionadoAnteriormente = id;
    this.enviarCardSelecionado.emit(index);
  }

  selecionarModalidade(modalidade): void {
    this.enviarModalidadeSelecionada.emit(modalidade);
  }
}
