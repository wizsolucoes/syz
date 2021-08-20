import { Component, Input, OnInit } from '@angular/core';
//permission
@Component({
  selector: 'ng-syz-resultado-simulacao',
  templateUrl: './resultado-simulacao.component.html',
  styleUrls: ['./resultado-simulacao.component.scss'],
})
export class NgSyzResultadoSimulacaoComponent {
  @Input() ajudaModalidades: string = 'Ajuda';
  @Input() cards: Card[] = [
    {
      prazo: 60,
      parcelaInicial: 7040.23,
      parcelaFinal: 4452.83,
      rendaMinima: 21120.69,
    },
    {
      prazo: 87,
      parcelaInicial: 4752.09,
      parcelaFinal: 4702.22,
      rendaMinima: 15840.29,
    },
    {
      prazo: 60,
      parcelaInicial: 7040.23,
      parcelaFinal: 4452.83,
      rendaMinima: 21120.69,
    },
    {
      prazo: 87,
      parcelaInicial: 4752.09,
      parcelaFinal: 4702.22,
      rendaMinima: 15840.29,
    },
    {
      prazo: 60,
      parcelaInicial: 7040.23,
      parcelaFinal: 4452.83,
      rendaMinima: 21120.69,
    },
    {
      prazo: 87,
      parcelaInicial: 4752.09,
      parcelaFinal: 4702.22,
      rendaMinima: 15840.29,
    },
    {
      prazo: 60,
      parcelaInicial: 7040.23,
      parcelaFinal: 4452.83,
      rendaMinima: 21120.69,
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

  selecionarCard(event) {
    var target = event.target || event.srcElement || event.currentTarget;
  }
}

interface Card {
  prazo: number;
  parcelaInicial: number;
  parcelaFinal: number;
  rendaMinima: number;
}

interface Condicao {
  condicao: string;
  valor: string;
  ajuda: string;
}

type linhaSelecionada = 'parcelaInicial' | 'parcelaFinal' | 'rendaMinima';
