export interface ComponentProps {
  name: string;
  description: string;
}

export interface NgSyzCarouselCardsConfig {
  speed?: number;
  spaceBetween?: number;
  autoplay?: boolean;
  loop?: boolean;
  effect?: string;
}
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
