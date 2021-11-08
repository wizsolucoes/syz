import { Orientation } from './orientation';

export interface OrientationConfiguration {
  /** Onde o step do tour aparecerá ao lado do elemento selecionado */
  orientationDirection: Orientation;
  /** Quando esta configuração de orientação começa em pixels */
  maximumSize?: number;
}
