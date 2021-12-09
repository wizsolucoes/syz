import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  NgSyzSimulationResultCard,
  NgSyzSimulationResultCondicao,
} from '../models';

@Component({
  selector: 'ng-syz-simulation-result',
  templateUrl: './simulation-result.component.html',
  styleUrls: ['./simulation-result.component.scss'],
})
export class NgSyzSimulationResultComponent {
  @Input() ajudaModalidades: string;
  @Input() cards: NgSyzSimulationResultCard[];
  @Input() valor: number;
  @Input() modalidades: string[];
  @Input() tituloValor: string;
  @Input() condicoes: NgSyzSimulationResultCondicao[];
  @Input() mostrarModalidades: boolean = true;
  @Output() enviarCardSelecionado = new EventEmitter(true);
  @Output() enviarModalidadeSelecionada = new EventEmitter(true);
  @Output() enviarValorEditavel = new EventEmitter(true);
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
  valorEditavelChange(text): void{
    this.enviarValorEditavel.emit(text);
  }
}
