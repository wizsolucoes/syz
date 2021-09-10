// models.ts
export interface NgSyzLoginCredentials {
  username: string;
  password: string;
}
export interface NgSyzSlide {
  img: string;
  title: string;
  subtitle: string;
  alt: string;
}
export interface NgSyzLoginLogo {
  img: string;
  imgAlt: string;
}

export interface NgSyzLoginCard {
  img: string;
  imgAlt: string;
  text: string;
}

export interface NgSyzSignUpCredentials {
  name: string;
  cpf: string;
  email: string;
  cellphone: string;
  password: string;
  confirmPassword: string;
}

export interface NgSyzResetPasswordCredentials {
  cpf: string;
  email: string;
}

export interface NgSyzInitiativeResultCard {
  icon: string;
  text: string;
  value: string;
  color: string;
  variable?: {
    direction: string;
    value: string;
  };
}

export interface NgSyzInitiativeResultCardImage {
  url: string;
  alt?: string;
}
export interface NgSyzCardsCarouselConfig {
  speed?: number;
  spaceBetween?: number;
  autoplay?: boolean;
  loop?: boolean;
  effect?: string;

  slidesPerView?: number;
  pagination?: boolean;
  keyboard?: boolean;
  grabCursor?: boolean;
  preloadImages?: boolean;
  lazy?: boolean;
  zoom?: boolean;
  zoomMax?: number;
  navigation?: {
    nextEl: string;
    prevEl: string;
  };
}
export interface NgSyzCardsCarouselSliders {
  title: string;
  itens: any;
  colorCard?: string;
  showMore?: boolean;
}

export interface NgSyzPerformanceSummaryList {
  icon: string;
  title: string;
  subTitle: string;
  nameType: string;
  total: number;
  totalComplet: number;
}

export interface NgSyzStatusTimelineEntry {
  title: string;
  subtitle: string;
  description: string;
  colorStatus: string;
}

export interface NgSyzAchievementsProgressBar {
  title: string;
  labelToggleLeft: string;
  labelToggleRight: string;
  actualProgress: number;
  actualProgressInPercentage: number;
  actualProgressDescription: string;
  goalProgress: number;
  goalProgressInPercentage: number;
  goalProgressDescription: string;
  itensDescriptionBelow: [{ title: string; subtitle: string }];
}

export interface NgSyzSimulationResultCard {
  camposCard: NgSyzSimulationResultCamposCard[];
  selecionado: string;
}

export interface NgSyzSimulationResultCamposCard {
  campo: string;
  valor: string;
}

export interface NgSyzSimulationResultCondicao {
  condicao: string;
  valor: string;
  ajuda: string;
}

export interface NgSyzButton {
  text: string;
  route?: string;
  iconClass?: string;
  imgPath?: string;
  disabled?: boolean;
}

export interface NgSyzRegraSenha {
  text: string;
  icon: string;
}

export interface Filter {
  field: string;
  value: FilterSlider | FilterCheckbox;
}

export interface FilterSlider {
  min: number;
  max: number;
  step: number;
  value: number;
}

export interface FilterCheckbox {
  values: string[];
}
