import { Component, OnInit } from '@angular/core';

export interface Sliders {
  title: string;
  itens: any;
  colorCard?: string;
  showMore?: boolean;
}
@Component({
  selector: 'ng-syz-carousel-cards',
  templateUrl: './carousel-cards.component.html',
  styleUrls: ['./carousel-cards.component.scss'],
})
export class NgSyzCarouselCardsComponent implements OnInit {
  config: any = {
    spaceBetween: 15,
    slidesPerView: 3,
    pagination: false,
    keyboard: true,
    grabCursor: true,
    loop: false,
    preloadImages: false,
    lazy: true,
    autoplay: false,
    speed: 500,
    effect: 'slide',
    zoom: false,
    zoomMax: 2,
    navigation: {
      nextEl: '.swiper-button-custom-next',
      prevEl: '.swiper-button-custom-prev',
    },
  };

  slides: Sliders[] = [
    {
      title: 'Conexão Conseg',
      colorCard: 'red',
      itens: [
        {
          text: 'Teste link',
          router: '/components/login-with-carousel-flow',
          target: '_self',
        },
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
      ],
    },
    {
      title: 'Conexão Conseg',
      colorCard: 'red',
      itens: [
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
      ],
    },
    {
      title: 'Conexão Conseg',
      colorCard: 'red',
      itens: [
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
      ],
    },
    {
      title: 'Conexão Conseg',
      colorCard: 'red',
      itens: [
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
      ],
    },
    {
      title: 'Conexão Conseg',
      colorCard: 'red',
      itens: [
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
      ],
    },
    {
      title: 'Conexão Conseg',
      colorCard: 'red',
      itens: [
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
        {
          text: 'Qual o valor máximo de leads por agências',
          router: '/components/login-with-carousel-flow',
          target: 'blank',
        },
      ],
    },
  ];

  constructor() {}

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
