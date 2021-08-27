import { Component, OnInit } from '@angular/core';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-navbar',
  templateUrl: './docs-navbar.component.html',
  styleUrls: ['./docs-navbar.component.scss']
})
export class DocsNavbarComponent {

  componentProps: ComponentProps[] = [
    {
      name: `@Input() person: any`,
      description: 'Os dados do usuário, veja exemplo',
    },
  ];

}
