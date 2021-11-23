import { Component, OnInit } from '@angular/core';
import { NgSyzRegraSenha } from 'projects/ng-syz/src/lib/models';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-password-reset-card',
  templateUrl: './docs-password-reset-card.component.html',
  styleUrls: ['./docs-password-reset-card.component.scss'],
})
export class DocsSimulationResultComponent implements OnInit {
  importCode = `import { NgSyzPasswordResetCardModule } from '@wizsolucoes/ng-syz';`;

  //Exemplo
  componentProps: ComponentProps[] = [
    {
      name: '@Input() qtdeCaracteresSenha:int',
      description: 'Quantidade mínima de caracteres na senha',
    },
    {
      name: '@Input() caractereEspecial:string',
      description: 'Informe um caractere especial - opcional',
    },
    {
      name: `@Input() emailDestinatarioCodigo: string`,
      description:
        'E-mail do usuário que receberá o código para redefinir a senha.',
    },
    {
      name: `@Input() textoBotaoSolicitarCodigo: string`,
      description:
        'Texto do botão que solicita o código de redefinição de senha.',
    },
    {
      name: `@Input() textoCampoInserirCodigo: string`,
      description:
        'Descrição do campo que será utilizado para inputar o codigo recebido no e-mail.',
    },
    {
      name: `@Input() regras: NgSyzRegraSenha[]`,
      description:
        'Regras para definir a senha (text, icon - Angular Material).',
    },
    {
      name: `@Output() solicitarCodigo: string`,
      description: 'Retorna o e-mail do usuário que solicitou o código.',
    },
    {
      name: `@Output() alterarSenha: string`,
      description: 'Retorna a nova senha para ser atualizada.',
    },
  ];

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--cor-botao`,
      description: 'Cor dos botões do componente',
    },
  ];

  caractereEspecialExemplo1 = '@';
  qtdeCaracteresSenhaExemplo1 = 6;
  emailDestinatarioCodigoExemplo1 = 'teste@destinatario.com';
  textoBotaoSolicitarCodigoExemplo1 = 'Solicitar código de redefinição';
  textoCampoInserirCodigoExemplo1 = 'Insira o código enviado para seu e-mail';
  regrasExemplo1: NgSyzRegraSenha[] = [
    {
      text: 'Para sua maior segurança, sugerimos o uso de: letras maiúsculas (ABC), números (123) e caracteres especiais (!@#)',
      icon: 'text_rotate_vertical',
    },
    {
      text: 'Sua senha deve conter no mínimo 6 caracteres.',
      icon: 'text_rotation_down',
    },
  ];

  qtdeCaracteresSenhaExemplo2 = 8;
  emailDestinatarioCodigoExemplo2 = 'usuario@gmail.com';
  textoBotaoSolicitarCodigoExemplo2 = 'Clique para obter o código';
  textoCampoInserirCodigoExemplo2 = 'Digite aqui o código recebido';
  regrasExemplo2: NgSyzRegraSenha[] = [
    {
      text: 'Sua senha deve conter no mínimo 8 caracteres.',
      icon: 'code icon',
    },
  ];

  htmlExemplo1: string;
  tsExemplo1: string;
  cssExemplo1: string;

  htmlExemplo2: string;
  tsExemplo2: string;
  cssExemplo2: string;

  constructor() {}

  ngOnInit(): void {
    this.initExampleVariables();
  }

  private initExampleVariables(): void {
    this.htmlExemplo1 = `
    <ng-syz-password-reset-card
        [emailDestinatarioCodigo]="emailDestinatarioCodigoExemplo1"
        [qtdeCaracteresSenha]="qtdeCaracteresSenhaExemplo1"
        [textoBotaoSolicitarCodigo]="textoBotaoSolicitarCodigoExemplo1"
        [textoCampoInserirCodigo]="textoCampoInserirCodigoExemplo1"
        [regras]="regrasExemplo1"
        (solicitarCodigo)="solicitarCodigo($event)"
        (alterarSenha)="alterarSenha($event)"
    ></ng-syz-password-reset-card>
    `;

    this.tsExemplo1 = `
      caractereEspecialExemplo1 = '@';
      qtdeCaracteresSenhaExemplo1 = 6;
      emailDestinatarioCodigoExemplo1 = 'teste@destinatario.com';
      textoBotaoSolicitarCodigoExemplo1 = 'Solicitar código de redefinição';
      textoCampoInserirCodigoExemplo1 = 'Insira o código enviado para seu e-mail';
      regrasExemplo1: NgSyzRegraSenha[] = [
        {
          text: 'Para sua maior segurança, sugerimos o uso de: letras maiúsculas (ABC), números (123) e caracteres especiais (!@#)',
          icon: 'text_rotate_vertical',
        },
        {
          text: 'Sua senha deve conter no mínimo 6 caracteres.',
          icon: 'text_rotation_down',
        },
      ];
    `;

    this.cssExemplo1 = `
      ng-syz-password-reset-card {
        --cor-botao: #ff9100;
      }
    `;

    this.htmlExemplo2 = `
    <ng-syz-password-reset-card
      [emailDestinatarioCodigo]="emailDestinatarioCodigoExemplo2"
      [qtdeCaracteresSenha]="qtdeCaracteresSenhaExemplo2"
      [textoBotaoSolicitarCodigo]="textoBotaoSolicitarCodigoExemplo2"
      [textoCampoInserirCodigo]="textoCampoInserirCodigoExemplo2"
      [regras]="regrasExemplo2"
      (solicitarCodigo)="solicitarCodigo($event)"
      (alterarSenha)="alterarSenha($event)"
    ></ng-syz-password-reset-card>
    `;

    this.tsExemplo2 = `
      qtdeCaracteresSenhaExemplo2 = 8;
      emailDestinatarioCodigoExemplo2 = 'usuario@gmail.com';
      textoBotaoSolicitarCodigoExemplo2 = 'Clique para obter o código';
      textoCampoInserirCodigoExemplo2 = 'Digite aqui o código recebido';
      regrasExemplo2: NgSyzRegraSenha[] = [
        {
          text: 'Sua senha deve conter no mínimo 8 caracteres.',
          icon: 'code icon',
        },
      ];
    `;

    this.cssExemplo2 = `
      ng-syz-password-reset-card {
        --cor-botao: #005ca9;
      }
    `;
  }

  solicitarCodigo(e): void {
    alert('Solicitou código para -> ' + e);
  }

  alterarSenha(e): void {
    alert('Alterou senha para -> ' + e);
  }
}
