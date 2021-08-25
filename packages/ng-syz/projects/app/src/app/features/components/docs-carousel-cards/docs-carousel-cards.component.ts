import { Component, OnInit } from '@angular/core';
import { ComponentProps } from '../../../shared/models/component-props.interface';
import { Exemples} from "./exemples"
@Component({
  selector: 'app-docs-carousel-cards',
  templateUrl: './docs-carousel-cards.component.html',
  styleUrls: ['./docs-carousel-cards.component.scss'],
})
export class DocsCarouselCardsComponent implements OnInit {
  Exemples = Exemples;
  Description = 'Componente para iniciar um carrossel de cards com até 3 colunas, sendo possível estilizar cores. Recebe uma lista de intens com links que irão navegar, podendo controlar se deve abrir o link em uma nova página ou não. \n \n Para cada Card, o componente irá controlar automáticamente a exibição de 3 itens da lista, e mostrará um botão para ver mais quando essa quantidade for maior! \n\n';
  
  componentProps: ComponentProps[] = [
    {
      name: `@Input() config: NgSyzCarouselCardsConfig = {}`,
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
      name: '@Input() slides: NgSyzCarouselCardsSliders[] = [];',
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
      description: 'Cor padrão dos elementos, setas e cor do botão de saiba mais.',
    },
    {
      name: `--bg-card-color`,
      description:'Cor de fundo de todo componente',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
