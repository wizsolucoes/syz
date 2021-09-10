import { Component, Input } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ComponentProps } from '../../models/component-props.interface';

@Component({
  selector: 'app-component-page',
  templateUrl: './component-page.component.html',
  styleUrls: ['./component-page.component.scss'],
})
export class ComponentPageComponent {
  @Input() title = '// TODO: Informar `title`';

  @Input() description = '// TODO: Informar `description`';

  @Input() selector = '// TODO: Informar `selector`';

  @Input() importCode = '// TODO: Informar `importCode`';

  @Input() componentProps: ComponentProps[] = [
    { name: 'Nenhuma propriedade', description: '' },
  ];

  @Input() componentCSSVariables: ComponentProps[] = [
    { name: 'Nenhum variável CSS', description: '' },
  ];

  displayedColumns: string[] = ['name', 'description'];

  isNgContentVisible = false;

  showContent(event: MatTabChangeEvent): void {
    this.isNgContentVisible = event.tab.textLabel === 'EXEMPLOS' ? true : false;
  }
}
