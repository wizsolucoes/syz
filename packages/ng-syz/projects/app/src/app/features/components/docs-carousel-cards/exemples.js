export const Exemples = [
  {
    htmlExampleCode: `
      <ng-syz-carousel-cards
        [slides]="config"
        [config]="slides"
      ></ng-syz-carousel-cards>
    `,
    tsCode:`
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

    config: {
      speed: 500,
      spaceBetween: 15,
      autoplay: false,
      loop: false,
      effect: 'slide',
    },
    slides: [
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
    ]
  },
  {
    htmlExampleCode: `
      <ng-syz-carousel-cards
        [slides]="config"
        [config]="slides"
      ></ng-syz-carousel-cards>
    `,
    tsCode:`
      config = {
        speed: 500,
        spaceBetween: 15,
        autoplay: false, <=== Altere o valor 'autoplay' para true
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
    config: {
      speed: 500,
      spaceBetween: 15,
      autoplay: true,
      loop: false,
      effect: 'slide',
    },
    slides: [
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
      }
    ]
  },
  {
    htmlExampleCode: `
      <ng-syz-carousel-cards
        [slides]="config"
        [config]="slides"
      ></ng-syz-carousel-cards>
    `,
    tsCode:`
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
    config: {
      speed: 500,
      spaceBetween: 15,
      autoplay: false,
      loop: false,
      effect: 'slide',
    },
    slides: [
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
      }
    ]
  },
];

