import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { iconDirect } from '../models';
import { NgSyzCarouselCardsSliders } from '../../models';


@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {
  @Input() slide: any;
  @Input() slides: NgSyzCarouselCardsSliders[];
  @Input() index: number;
  @Input() unique: boolean = false;

  iconDirect;

  constructor(private sanitizer: DomSanitizer) {
    this.iconDirect = this.sanitizer.bypassSecurityTrustHtml(iconDirect);
  }

  ngOnInit(): void {}

  showItens(i) {
    const list = this.slides[i];
    if (!list.itens.length) return [];
    if (list?.showMore) return list.itens;

    const showMinItens = list.itens.slice(0, 3);
    return showMinItens;
  }
  showMore(i) {
    this.slides[i].showMore = this.slides[i].showMore ? false : true;
  }
}
