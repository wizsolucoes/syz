import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-carousel-cards',
  templateUrl: './docs-carousel-cards.component.html',
  styleUrls: ['./docs-carousel-cards.component.scss']
})
export class DocsCarouselCardsComponent implements OnInit {

  config = {
    speed: 500,
    spaceBetween: 15,
    autoplay: false,
    loop: false,
    effect: 'slide'
  };

  slides = [
    {
      title: 'Conexão Conseg',
      colorCard: '#f1f1f1',
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

  constructor() { }

  ngOnInit(): void {
  }

}
