import { Component, OnInit } from '@angular/core';
import { Orientation, Tour, TourService } from 'projects/ng-syz/src/public-api';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-tour',
  templateUrl: './docs-tour.component.html',
  styleUrls: ['./docs-tour.component.scss'],
})
export class DocsTourComponent implements OnInit {
  importCode = `import { NgSyzTourModule } from '@wizsolucoes/ng-syz';`;

  componentProps: ComponentProps[] = [
    {
      name: `tour: Tour`,
      description: 'Classe para instanciar o tour.',
    },
    {
      name: 'id',
      description: 'Parâmetro classe Tour - Identificador para tour',
    },
    {
      name: 'skipCallback',
      description:
        'Parâmetro classe Tour - A função será chamada quando o tour for pulado',
    },
    {
      name: 'completeCallback',
      description:
        'Parâmetro classe Tour - A função será chamada quando o tour for concluído',
    },
    {
      name: 'minimumScreenSize',
      description:
        'Parâmetro classe Tour - Tamanho mínimo da tela em pixels antes do passeio ser executado, se o passeio for redimensionado abaixo desse valor, o usuário será instruído a redimensionar',
    },
    {
      name: 'preventBackdropFromAdvancing',
      description:
        'Parâmetro classe Tour - Impede que o tour avance clicando no backdrop',
    },
    {
      name: 'tourStep: TourStep[]',
      description: 'Parâmetro classe Tour - Steps do tour',
    },
    {
      name: 'selector?: string',
      description:
        'Parâmetro classe TourStep - Seletor para o elemento que será destacado',
    },
    {
      name: 'title?: string',
      description: 'Parâmetro classe TourStep - Texto do título do tour',
    },
    {
      name: 'content: string',
      description: 'Parâmetro classe TourStep - Texto do step do tour',
    },
    {
      name: 'useRoute?: boolean',
      description:
        'Parâmetro classe TourStep - Habilita redirecionamento a próxima rota',
    },
    {
      name: 'route?: string',
      description: 'Parâmetro classe TourStep - Rota a ser redirecionada',
    },
    {
      name: 'routePrevious?: string',
      description: 'Parâmetro classe TourStep - Rota anterior',
    },
    {
      name: 'orientation: Orientation | OrientationConfiguration[]',
      description:
        'Parâmetro classe TourStep - Onde o step do tour aparecerá ao lado do elemento selecionado',
    },
    {
      name: 'action?: () => void',
      description:
        'Parâmetro classe TourStep - Ação que acontece quando o step é aberta',
    },
    {
      name: 'closeAction?: () => void',
      description:
        'Parâmetro classe TourStep - Ação que acontece quando o step é fechado',
    },
    {
      name: 'skipStep?: boolean',
      description:
        'Parâmetro classe TourStep - Ignora este step, isso ocorre para que você não precise criar várias configurações de tour com base nas configurações / configurações do usuário',
    },
    {
      name: 'scrollAdjustment?: number',
      description:
        'Parâmetro classe TourStep - Adiciona algum preenchimento para itens como cabeçalhos fixos ao rolar para um elemento',
    },
    {
      name: 'useHighlightPadding?: boolean',
      description:
        'Parâmetro classe TourStep - Adiciona padding padrão ao redor do destaque do tour',
    },
    {
      name: 'highlightPadding?: number',
      description:
        'Parâmetro classe TourStep - Adiciona padding ao redor do destaque do tour em pixels, substituindo o padrão deste step',
    },
    {
      name: 'tourStepWidth?: number',
      description: 'Parâmetro classe TourStep - largura step',
    },
    {
      name: 'skipButtonText?: string',
      description: 'Parâmetro classe TourStep - texto botão pular',
    },
    {
      name: 'doneButtonText?: string',
      description: 'Parâmetro classe TourStep - texto botão completo',
    },
    {
      name: 'nextButtonText?: string',
      description: 'Parâmetro classe TourStep - texto botão avançar',
    },
    {
      name: 'closeButtonText?: string',
      description: 'Parâmetro classe TourStep - texto botão fechar',
    },
    {
      name: 'backButtonText?: string',
      description: 'Parâmetro classe TourStep - texto botão voltar',
    },
    {
      name: 'imgAvatar?: boolean',
      description: 'Parâmetro classe TourStep - imagem avatar visível',
    },
    {
      name: 'imgAvatarUrl?: string',
      description: 'Parâmetro classe TourStep - Url imagem avatar',
    },
    {
      name: 'imgAvatarAlt?: string',
      description: 'Parâmetro classe TourStep - Alt imagem avatar',
    },
    {
      name: 'imgAvatarWidth?: number',
      description: 'Parâmetro classe TourStep - Largura imagem avatar',
    },
    {
      name: 'imgAvatarHeight?: number',
      description: 'Parâmetro classe TourStep - Altura imagem avatar',
    },
    {
      name: 'startTour()',
      description: 'Método iniciar tour',
    },
    {
      name: 'nextStep()',
      description: 'Método avançar step tour',
    },
    {
      name: 'backStep()',
      description: 'Método voltar step tour',
    },
    {
      name: 'skipTour()',
      description: 'Método pular tour',
    },
    {
      name: 'resetTour()',
      description: 'Método resetar tour',
    },
  ];

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--primary-color`,
      description: 'Cor dos botões de avançar e de voltar',
    },
  ];

  exampleHtml = `
  <div class="example">

    <ng-syz-tour></ng-syz-tour>

    <div class="card mb-24">
      <div class="container">
        <div class="header d-flex justify-content-between align-items-center">
          <div class="fs-24 step1">Este é o cabeçalho da página da web</div>
          <div>
            <button class="button" (click)="startTour()">Iniciar tour</button>
          </div>
        </div>
        <div class="d-flex">
          <div class="menu p-8">
            <ul class="list-group">
              <li class="list-group-item list-group-item-action">Menu 1</li>
              <li class="list-group-item list-group-item-action step4">Menu 2</li>
              <li class="list-group-item list-group-item-action">Menu 3</li>
            </ul>
          </div>
          <div class="content flex-grow-1">
            <div class="mb-16">
              <h1>Este é o conteúdo da página da web</h1>
            </div>

            <div class="mb-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>

            <div class="mb-16 step3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>

            <div class="mb-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>

            <div class="mb-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>

            <div class="mb-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="step2">Copyright © 2021 wizsoluções</div>
        </div>
      </div>
    </div>
  </div>
  `;

  exampleTs = `
    tourTeste: Tour = {
      id: 'tour-teste',
      preventBackdropFromAdvancing: false,
      skipCallback: this.skipMethod,
      tourStep: [
          {
            title: 'Step 0',
            // selector: '.demo-title',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli.',
            orientation: Orientation.Left,
            useHighlightPadding: true,
            skipButtonText: 'Pular',
            doneButtonText: 'Concluído',
            nextButtonText: 'Avançar',
            closeButtonText: 'Fechar',
            backButtonText: 'Voltar',
            imgAvatar: true,
            imgAvatarUrl: '/assets/img/wauto-mini.png',
            imgAvatarAlt: 'testando alt avatar',
            tourStepWidth: 500
        }
      ]
    };

    startTour(): void {
      this.tourService.startTour(this.tourTeste);
    }
  `;

  exampleCss = `
  ng-syz-tour {
    --primary-color: teal;
  }
  `;

  tourTeste: Tour = {
    id: 'tour-teste',
    preventBackdropFromAdvancing: false,
    skipCallback: this.skipMethod,
    tourStep: [
      {
        title: 'Cabeçalho da página',
        selector: '.step1',
        content: `Este é o cabeçalho da página da web macado no primeiro step.`,
        orientation: Orientation.Right,
        useHighlightPadding: true,
        skipButtonText: 'Pular',
        doneButtonText: 'Concluído',
        nextButtonText: 'Avançar',
        closeButtonText: 'Fechar',
        backButtonText: 'Voltar',
        imgAvatar: true,
        imgAvatarUrl: '/assets/img/wauto-mini.png',
        imgAvatarAlt: 'testando alt avatar',
      },
      {
        title: '<u>A wizconseg</u>',
        selector: '.step2',
        content: `
            <video width="540" controls>
            <source src="/assets/video/conseg.mp4" type="video/mp4">
            Your browser does not support HTML video.
          </video>
            `,
        orientation: Orientation.Top,
        useHighlightPadding: true,
        highlightPadding: 20,
        skipButtonText: 'Pular',
        doneButtonText: 'Concluído',
        nextButtonText: 'Texto Teste Avançar',
        closeButtonText: 'Fechar',
        backButtonText: 'Voltar',
        imgAvatar: false,
        imgAvatarUrl: '/assets/img/wiz-logo.jpg',
        imgAvatarAlt: 'testando alt avatar',
        tourStepWidth: 600,
      },
      {
        title: '<u>Texto descrição</u>',
        selector: '.step3',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        orientation: Orientation.Left,
        useHighlightPadding: false,
        skipButtonText: 'Pular',
        doneButtonText: 'Concluído',
        nextButtonText: 'Avançar',
        closeButtonText: 'Fechar',
        backButtonText: 'Voltar',
        imgAvatar: true,
        imgAvatarUrl: '/assets/img/wiz-logo.jpg',
        imgAvatarAlt: 'testando alt avatar',
      },
      {
        title: 'Menu exemplo',
        selector: '.step4',
        content:
          'Lorem ipsum dolor sit amet, <u style="color: red;">consectetur adipiscing elit</u>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        orientation: Orientation.Right,
        skipButtonText: 'Pular',
        doneButtonText: 'Concluído',
        nextButtonText: 'Avançar',
        closeButtonText: 'Fechar',
        backButtonText: 'Voltar',
        imgAvatar: true,
        imgAvatarUrl: '/assets/img/wauto-mini.png',
        imgAvatarAlt: 'testando alt avatar',
      },
    ],
  };

  constructor(private readonly tourService: TourService) {}

  ngOnInit(): void {}

  startTour(): void {
    this.tourService.startTour(this.tourTeste);
  }

  skipMethod(): void {}
}
