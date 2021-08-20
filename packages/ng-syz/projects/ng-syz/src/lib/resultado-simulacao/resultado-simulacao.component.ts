import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-syz-resultado-simulacao',
  templateUrl: './resultado-simulacao.component.html',
  styleUrls: ['./resultado-simulacao.component.scss'],
})
export class NgSyzResultadoSimulacaoComponent {
  @Input() informacoes: InputInformacoes = {
    valor: 2500000,
    modalidades: ['Price', 'SAC', 'SACRE'],
    condicoes: [
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
    ],
  };
}

interface InputInformacoes {
  valor: number;
  modalidades: string[];
  condicoes: Condicao[];
}

interface Condicao {
  condicao: string;
  valor: string;
  ajuda: string;
}
