import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { iconDirect } from './models';
import { NgSyzCardsCarouselConfig, NgSyzCardsCarouselSliders } from '../models';
@Component({
  selector: 'ng-syz-cards-carousel',
  templateUrl: './cards-carousel.component.html',
  styleUrls: ['./cards-carousel.component.scss'],
})
export class NgSyzCardsCarouselComponent implements OnInit {
  @Input() config: NgSyzCardsCarouselConfig = {
    speed: 500,
    spaceBetween: 15,
    autoplay: false,
    loop: false,
    effect: 'slide',
  };

  configuration: NgSyzCardsCarouselConfig = {
    slidesPerView: 3,
    pagination: false,
    keyboard: false,
    grabCursor: true,
    preloadImages: false,
    lazy: true,
    zoom: false,
    zoomMax: 2,
    navigation: {
      nextEl: '.swiper-button-custom-next',
      prevEl: '.swiper-button-custom-prev',
    },
  };

  @Input() slides: NgSyzCardsCarouselSliders[] = [
    {
      title: '',
      itens: [],
      showMore: false,
    },
  ];

  iconDirect;

  constructor(private sanitizer: DomSanitizer) {
    this.iconDirect = this.sanitizer.bypassSecurityTrustHtml(iconDirect);
  }

  ngOnInit(): void {
    this.configuration.speed = this.config.speed;
    this.configuration.spaceBetween = this.config.spaceBetween;
    this.configuration.autoplay = this.config.autoplay;
    this.configuration.loop = this.config.loop;
    this.configuration.effect = this.config.effect;
  }

  showItens(i = 0): [] {
    const list = this.slides[i];
    if (!list?.itens.length) {
      return [];
    }
    if (list?.showMore) {
      return list?.itens;
    }

    const showMinItens = list.itens.slice(0, 3);
    return showMinItens;
  }

  showMore(i): void {
    this.slides[i].showMore = this.slides[i].showMore ? false : true;
  }
}
