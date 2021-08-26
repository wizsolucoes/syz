import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-performance-summary',
  templateUrl: './docs-performance-summary.component.html',
  styleUrls: ['./docs-performance-summary.component.scss']
})
export class DocsPerformanceSummaryComponent implements OnInit {


  dataList = [
    {
      icon: 'home',
      title: 'teste titulo',
      subTitle: 'teste subticulo',
      nameType: 'name label',
      total: 80,
      totalComplet: 12
    },
    {
      icon: 'shared',
      title: 'teste titulo 2',
      subTitle: 'teste subticulo 2',
      nameType: 'name label 2',
      total: 50,
      totalComplet: 22
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
