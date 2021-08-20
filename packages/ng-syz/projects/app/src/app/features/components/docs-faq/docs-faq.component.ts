import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-faq',
  templateUrl: './docs-faq.component.html',
  styleUrls: ['./docs-faq.component.scss']
})
export class DocsFaqComponent implements OnInit {

  public dataFromApi: any;

  constructor() { }

  ngOnInit(): void {
  }

}
