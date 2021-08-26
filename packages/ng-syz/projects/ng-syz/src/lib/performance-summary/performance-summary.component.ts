import { Component, Input, OnInit } from '@angular/core';
import { NgSyzPerformanceSummaryList } from '../models';

@Component({
  selector: 'ng-syz-performance-summary',
  templateUrl: './performance-summary.component.html',
  styleUrls: ['./performance-summary.component.scss'],
})
export class NgSyzPerformanceSummaryComponent implements OnInit {

  @Input() title: string;
  @Input() msgErroList: string = 'Nenhum item disponível para exibição!';
  @Input() List: NgSyzPerformanceSummaryList[] = [];


  constructor() {}

  ngOnInit(): void {
  }

  calcPercent(total, complet): number{
    return (complet * 100) / total;
  }
}
