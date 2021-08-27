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

export interface NgSyzResultadoSimulacaoCard {
  camposCard: NgSyzResultadoSimulacaoCamposCard[];
  selecionado: string;
}

export interface NgSyzResultadoSimulacaoCamposCard {
  campo: string;
  valor: string;
}

export interface NgSyzResultadoSimulacaoCondicao {
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
