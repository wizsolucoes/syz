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

export interface CreateFormInput {
  type: string;
  name: string;
  formControlName: string;
  mask: string;
}

export interface CreateFormField {
  label: string;
  input: CreateFormInput;
  error: string;
  matErrorMsg: string;
}
