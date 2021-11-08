import { Orientation } from './orientation';
import { OrientationConfiguration } from './orientationConfiguration';

export interface TourStep {
  /** Seletor para o elemento que será destacado */
  selector?: string;
  /** Texto do título do tour */
  title?: string;
  /** Texto do step do tour */
  content: string;
  /** Habilita redirecionamento a próxima rota */
  useRoute?: boolean;
  /** Rota a ser redirecionada */
  route?: string;
  /** Rota anterior */
  routePrevious?: string;
  /** Onde o step do tour aparecerá ao lado do elemento selecionado */
  orientation?: Orientation | OrientationConfiguration[];
  /** Ação que acontece quando o step é aberta */
  action?: () => void;
  /** Ação que acontece quando o step é fechado */
  closeAction?: () => void;
    //  Ignora este step, isso ocorre para que você não precise criar
    //  várias configurações de tour com base nas
    //  configurações / configurações do usuário
  skipStep?: boolean;
  /** Adiciona algum preenchimento para itens como cabeçalhos fixos ao rolar para um elemento */
  scrollAdjustment?: number;
  /** Adiciona padding padrão ao redor do destaque do tour. */
  useHighlightPadding?: boolean;
  /** Adiciona padding ao redor do destaque do tour em pixels, substituindo o padrão deste step. */
  highlightPadding?: number;
  /** largura step */
  tourStepWidth?: number;
  /** texto botão pular */
  skipButtonText?: string;
  /** texto botão completo */
  doneButtonText?: string;
  /** texto botão avançar */
  nextButtonText?: string;
  /** texto botão fechar */
  closeButtonText?: string;
  /** texto botão voltar */
  backButtonText?: string;
  /** imagem avatar visível */
  imgAvatar?: boolean;
  /** Url imagem avatar */
  imgAvatarUrl?: string;
  /** Alt imagem avatar */
  imgAvatarAlt?: string;
  /** Largura imagem avatar */
  imgAvatarWidth?: number;
  /** Altura imagem avatar */
  imgAvatarHeight?: number;
}
