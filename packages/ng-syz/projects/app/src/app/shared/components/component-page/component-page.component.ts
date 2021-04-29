import { Component, Input } from '@angular/core';
import { ComponentProps } from '../../models/component-props.interface';

@Component({
  selector: 'app-component-page',
  templateUrl: './component-page.component.html',
  styleUrls: ['./component-page.component.scss'],
})
export class ComponentPageComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() selector: string;
  @Input() importCode: string;
  @Input() componentProps: ComponentProps[];
  @Input() componentCSSVariables: ComponentProps[];

  displayedColumns: string[] = ['name', 'description'];
}
