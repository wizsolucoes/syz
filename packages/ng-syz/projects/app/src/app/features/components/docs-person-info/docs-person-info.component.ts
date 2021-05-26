import { Component } from '@angular/core';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-person-info',
  templateUrl: './docs-person-info.component.html',
  styleUrls: ['./docs-person-info.component.scss'],
})
export class DocsPersonInfoComponent {
  examplePerson = {
    name: 'Lucas Brando',
    cpfCnpj: '05011798100',
    birthdate: '21/01/1995',
    gerder: 'Masculino',
    civilState: 'Casado(a)',
    phone: '6133891473',
    cellphone: '61984523615',
    email: 'oliveira@live.in',
    address: {
      cep: '73320140',
      uf: 'DF',
      city: 'Brasília',
      street: 'Rua Piaúi',
      district: 'Vila Vicentina',
      complement: 'Quadra 03',
      number: '29',
    },
  };

  importCode = `
  import { NgSyzPersonInfoModule } from '@wizsolucoes/ng-syz';
  `;

  exampleHtml = `
  <div class="example">
    <ng-syz-person-info [person]="examplePerson"></ng-syz-person-info>
  </div>
  `;

  example2Html = `
  <div class="example2">
    <ng-syz-person-info [person]="examplePerson"></ng-syz-person-info>
  </div>
  `;

  exampleCss = `
  .example {
    ng-syz-person-info {
      --syz-person-info-text-color: black;
    }
  }
  `;

  example2Css = `
  .example2 {
    background-color: var(--accent-color);
    max-width: 480px;

    ng-syz-person-info {
      --person-info-text-color: white;
    }
  }
  `;

  exampleTs = `
  examplePerson = {
    name: 'Lucas Brando',
    cpfCnpj: '05011798100',
    birthdate: '21/01/1995',
    gerder: 'Masculino',
    civilState: 'Casado(a)',
    phone: '6133891473',
    cellphone: '61984523615',
    email: 'oliveira@live.in',
    address: {
      cep: '73320140',
      uf: 'DF',
      city: 'Brasília',
      street: 'Rua Piaúi',
      district: 'Vila Vicentina',
      complement: 'Quadra 03',
      number: '29',
    },
  };
  `;

  componentProps: ComponentProps[] = [
    {
      name: `@Input() person: any`,
      description: 'Os dados do usuário, veja exemplo',
    },
  ];

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--syz-person-info-text-color`,
      description: 'Cor do texto',
    },
  ];
}
