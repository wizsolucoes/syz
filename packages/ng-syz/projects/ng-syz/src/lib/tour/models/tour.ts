import { TourStep } from './tourStep';

export interface Tour {
  /** Identificador para tour */
  id: string;
  /** Steps do tour */
  tourStep: TourStep[];
  /** A função será chamada quando o tour for pulado */
  skipCallback?: (stepSkippedOn: number) => void;
  /** A função será chamada quando o tour for concluído */
  completeCallback?: () => void;
  //  Tamanho mínimo da tela em pixels antes do passeio ser executado,
  //  se o passeio for redimensionado abaixo desse valor,
  //  o usuário será instruído a redimensionar
  minimumScreenSize?: number;
  /** Impede que o tour avance clicando no backdrop. */
  preventBackdropFromAdvancing?: boolean;
}
