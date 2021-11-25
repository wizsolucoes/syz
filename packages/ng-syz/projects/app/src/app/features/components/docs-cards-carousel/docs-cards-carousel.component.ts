import { Component, OnInit } from '@angular/core';
import {
  ComponentProps,
  NgSyzCardsCarouselSliders,
  NgSyzCardsCarouselConfig,
} from '../../../shared/models/component-props.interface';
@Component({
  selector: 'app-docs-cards-carousel',
  templateUrl: './docs-cards-carousel.component.html',
  styleUrls: ['./docs-cards-carousel.component.scss'],
})
export class DocsCarouselCardsComponent implements OnInit {
  // Exemplo
  config01 = {
    htmlExampleCode: `
      <ng-syz-cards-carousel
        [slides]="config"
        [config]="slides"
      ></ng-syz-cards-carousel>
    `,
    tsCode: `
      config = {
        speed: 500,
        spaceBetween: 15,
        autoplay: false,
        loop: false,
        effect: 'slide',
      };
      slides = [
        {
          title: 'Conexão Conseg',
          colorCard: '#ffffff',
          itens: [
            {
              text: 'Teste link',
              router: '/components/login-with-carousel-flow',
              target: '_self',
            },
            ...
          ],
        },
        ...
      ]
    `,
    cssCode: `
      --text-color: #60a3c3;
      --title-color: #1aa0bf;
      --primary-color: #00aa9b;
      --bg-card-color: #94feff;
    `,
  };

  dataConfig01: NgSyzCardsCarouselConfig = {
    speed: 500,
    spaceBetween: 15,
    autoplay: false,
    loop: false,
    effect: 'slide',
  };

  // exemplo data slide 01
  dataSlides01: NgSyzCardsCarouselSliders[] = [
    {
      title: 'Conexão Conseg',
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

  dataConfig02: NgSyzCardsCarouselConfig = {
    speed: 500,
    spaceBetween: 15,
    autoplay: true,
    loop: false,
    effect: 'slide',
  };

  dataSlides02: NgSyzCardsCarouselSliders[] = [
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
  ];

  config03 = {
    htmlExampleCode: `
    <ng-syz-cards-carousel
      [slides]="config"
      [config]="slides"
    ></ng-syz-cards-carousel>
  `,
    tsCode: `
      config = {
        speed: 500,
        spaceBetween: 15,
        autoplay: false,
        loop: false,
        effect: 'slide',
      };
      slides = [
        {
          title: 'Conexão Conseg',
          colorCard: '#dffffb', <=== Altere o valor para a cor que desejar
          itens: [
            {
              text: 'Teste link',
              router: '/components/login-with-carousel-flow',
              target: '_self',
            },
            ...
          ],
        },
        ...
      ]
    `,
  };

  dataConfig03: NgSyzCardsCarouselConfig = {
    speed: 500,
    spaceBetween: 15,
    autoplay: false,
    loop: false,
    effect: 'slide',
  };

  dataSlides03: NgSyzCardsCarouselSliders[] = [
    {
      title: 'Conexão Conseg',
      colorCard: '#dffffb',
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
      colorCard: '#ffe8e8',
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
      colorCard: '#dffffb',
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
      colorCard: '#ffe8e8',
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
      colorCard: '#dffffb',
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

  Description =
    'Componente para iniciar um carrossel de cards com até 3 colunas, sendo possível estilizar cores. Recebe uma lista de intens com links que irão navegar, podendo controlar se deve abrir o link em uma nova página ou não. \n \n Para cada Card, o componente irá controlar automáticamente a exibição de 3 itens da lista, e mostrará um botão para ver mais quando essa quantidade for maior! \n\n';

  componentProps: ComponentProps[] = [
    {
      name: `@Input() config: NgSyzCardsCarouselConfig = {}`,
      description: `Configurações do carousel.

config = {
  speed: 500,
  spaceBetween: 15,
  autoplay: false,
  loop: false,
  effect: 'slide',
};
      `,
    },
    {
      name: '@Input() slides: NgSyzCardsCarouselSliders[] = [];',
      description: `Listagem dos cards para apresentar.
        
slides: [
  {
    title: 'Conexão Conseg',
    colorCard: '#ffffff',
    itens: [
      {
        text: 'Teste link',
        router: '/components/login-with-carousel-flow',
        target: '_self',
      },
      ...
    ],
  },
  ...
]
      `,
    },
  ];

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--text-color`,
      description: 'Cor dos textos dos itens.',
    },
    {
      name: `--title-color`,
      description: 'Cor do título dos cards.',
    },
    {
      name: `--primary-color`,
      description:
        'Cor padrão dos elementos, setas e cor do botão de saiba mais.',
    },
    {
      name: `--bg-card-color`,
      description: 'Cor de fundo de todo componente',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
