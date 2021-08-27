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

export interface NgSyzTimeline {
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
  itensDescriptionBelow: [{title: string, subtitle: string}];
}
