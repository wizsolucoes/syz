import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { iconDirect } from './models';
import { NgSyzCarouselCardsConfig, NgSyzCarouselCardsSliders } from '../models';
@Component({
  selector: 'ng-syz-carousel-cards',
  templateUrl: './carousel-cards.component.html',
  styleUrls: ['./carousel-cards.component.scss'],
})
export class NgSyzCarouselCardsComponent implements OnInit {
  
  @Input() config: NgSyzCarouselCardsConfig = {
    speed: 500,
    spaceBetween: 15,
    autoplay: false,
    loop: false,
    effect: 'slide'
  }

  configuration: NgSyzCarouselCardsConfig = {    
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

  @Input() slides: NgSyzCarouselCardsSliders[] = [];

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

}
