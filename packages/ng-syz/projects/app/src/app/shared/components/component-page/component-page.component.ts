import { Component, Input, OnInit } from '@angular/core';
import { ComponentProps } from '../../models/component-props.interface';

@Component({
  selector: 'app-component-page',
  templateUrl: './component-page.component.html',
  styleUrls: ['./component-page.component.scss'],
})
export class ComponentPageComponent implements OnInit {
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

  visibled = true;

  ngOnInit() {}

  showContent(event){
    this.visibled = event.tab.textLabel === 'EXEMPLOS' ? true : false;
  }
}
