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

export interface NgSyzCardResultInitiative {
  icon: string;
  text: string;
  value: string;
  color: string;
  variable?: {
    direction: string,
    value: string
  };
}
export interface NgSyzCarouselCardsConfig {
  speed?: number,
  spaceBetween?: number,
  autoplay?: boolean,
  loop?: boolean,
  effect?: string,

  slidesPerView?: number,
  pagination?: boolean,
  keyboard?: boolean,
  grabCursor?: boolean,
  preloadImages?: boolean,
  lazy?: boolean,
  zoom?: boolean,
  zoomMax?: number,
  navigation?: {
    nextEl: string,
    prevEl: string,
  },
};
export interface NgSyzCarouselCardsSliders {
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