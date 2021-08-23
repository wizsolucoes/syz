export interface Cards {
    icon: string;
    text: string;
    value: string;
    color: string;
    variable?: {
      direction: string,
      value: string
    };
}