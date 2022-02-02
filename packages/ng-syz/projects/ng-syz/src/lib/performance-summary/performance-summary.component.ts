import { Component, Input, OnInit } from '@angular/core';
import { NgSyzPerformanceSummaryList } from '../models';

@Component({
  selector: 'ng-syz-performance-summary',
  templateUrl: './performance-summary.component.html',
  styleUrls: ['./performance-summary.component.scss'],
})
export class NgSyzPerformanceSummaryComponent {
  @Input() title: string;
  @Input() msgErroList = 'Nenhum item disponível para exibição!';
  @Input() List: NgSyzPerformanceSummaryList[] = [];

  calcPercent(total, complet): number {
    const calc = (complet * 100) / total;
    return parseFloat(calc.toFixed(2));
  }
}
