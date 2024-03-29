<!-- omit in toc -->

# NgSyz

- [NgSyz](#ngsyz)
  - [Sobre](#sobre)
    - [Estrutura](#estrutura)
  - [Desenvolvimento](#desenvolvimento)
    - [Por onde começar](#por-onde-começar)
      - [1. Clone o monorepositório](#1-clone-o-monorepositório)
      - [2. Entre na pasta deste projeto do ng-syz](#2-entre-na-pasta-deste-projeto-do-ng-syz)
      - [3. Todos os comandos a seguir são executados na raiz deste projeto específico. **Não na raiz do monorepositório.**](#3-todos-os-comandos-a-seguir-são-executados-na-raiz-deste-projeto-específico-não-na-raiz-do-monorepositório)
  - [Adicionando um componente](#adicionando-um-componente)
    - [1. Crie um novo módulo para o novo componente em `projects/ng-syz/src/lib`](#1-crie-um-novo-módulo-para-o-novo-componente-em-projectsng-syzsrclib)
    - [2. Adicione dependências do componente a `peerDependencies` no `projects/ng-syz/package.json`.](#2-adicione-dependências-do-componente-a-peerdependencies-no-projectsng-syzpackagejson)
    - [3. Prefixe o seletor do componente com "ng-syz" e nome do componente e módulo com "NgSyz"](#3-prefixe-o-seletor-do-componente-com-ng-syz-e-nome-do-componente-e-módulo-com-ngsyz)
    - [4. Torne os membros do componente públicos](#4-torne-os-membros-do-componente-públicos)
    - [5. Visualize e documente o componente na aplicação de demonstração](#5-visualize-e-documente-o-componente-na-aplicação-de-demonstração)
      - [5.1 Crie um módulo para a documentação do Componente](#51-crie-um-módulo-para-a-documentação-do-componente)
      - [5.2 Adiciona o novo componente ao template](#52-adiciona-o-novo-componente-ao-template)
      - [5.3 Adicione um `navItem`](#53-adicione-um-navitem)
      - [5.4 Documente o novo componente com o componente compartilhado `<app-component-page>`](#54-documente-o-novo-componente-com-o-componente-compartilhado-app-component-page)
      - [5.5 Criando exemplos de componentes de página inteira](#55-criando-exemplos-de-componentes-de-página-inteira)
  - [Testando o componente em outra aplicação](#testando-o-componente-em-outra-aplicação)
    - [1. Gere um distribuível da biblioteca](#1-gere-um-distribuível-da-biblioteca)
    - [2. Instale o distribuível na outra aplicação](#2-instale-o-distribuível-na-outra-aplicação)
    - [3. Adicione o componente à aplicação](#3-adicione-o-componente-à-aplicação)
  - [Contribuição, homologação e CI/CD](#contribuição-homologação-e-cicd)

## Sobre

Uma biblioteca angular com os componentes do design system SYZ e uma aplicação Angular com uma demonstração dos componentes.

### Estrutura

```bash
.
└── projects
    # Aplicação de galeria da biblioteca de componentes
    └── app
        └── src/app

    # A biblioteca de componentes
    └── ng-syz
        ├── package.json
        └── src/lib
            ├── cpf-search
            └── componente-2
```

## Desenvolvimento

### Por onde começar

#### 1. Clone o monorepositório
```bash
git clone git@github.com:wizsolucoes/syz.git
# OU
git clone https://github.com/wizsolucoes/syz.git
```
#### 2. Entre na pasta deste projeto do ng-syz
```bash
cd packages/ng-syz
```

#### 3. Todos os comandos a seguir são executados na raiz deste projeto específico. **Não na raiz do monorepositório.**

```bash
# Instalar dependências
npm install

# Buildar biblioteca
ng build ng-syz --watch

# Servir a aplicação demo
ng serve app

# Executar testes da biblioteca
ng test ng-syz

# Executar testes da aplicação de demo
ng test app

# Executar lint da biblioteca
ng lint ng-syz

# Executar lint da aplicação de demo
ng lint app
```

## Adicionando um componente

>**Observação: Todos os comandos a seguir são executados na raiz deste projeto (packages/ng-syz).**

### 1. Crie um novo módulo para o novo componente em `projects/ng-syz/src/lib`

Cada componente é um módulo Angular. [Veja um exemplo.](./projects/ng-syz/src/lib/cpf-search/) Crie uma nova pasta para o módulo.

Você pode criar um novo módulo com um novo componente executando estes comandos:
```bash
ng g m --project ng-syz my-component
ng g c --project ng-syz my-component
```

Se você estiver inserindo um componente que existia em outra aplicação, você pode criar a pasta manualmente e copiar e colar todos os arquivos do módulo do componente para a nova pasta (`.module.ts|.component.ts|.component.html|.component.scss|.spec.ts`).

Certifique-se de que os componentes que o módulo deva expor estejam na array de `exports`. Por exemplo, o `NgSyzCpfSearchModule` precisa expor o componente `NgSyzCpfSearchComponent`:
```ts
@NgModule({
  declarations: [NgSyzCpfSearchComponent],
  imports: [
    CommonModule,
  ],
  exports: [NgSyzCpfSearchComponent],
})
export class NgSyzCpfSearchModule {}
```

**Se o componente for um fluxo, como uma página de login, siga a convenção de sufixar o nome com a palavra "flow". Por exemplo: `login-flow` ou `login-with-carousel-flow`. [Exemplo](./projects/ng-syz/src/lib/example-flow/)**

### 2. Adicione dependências do componente a `peerDependencies` no `projects/ng-syz/package.json`.

Adicione dependências do componente como propriedade de `peerDependencies` no [`projects/ng-syz/package.json`](./projects/ng-syz/package.json).

### 3. Prefixe o seletor do componente com "ng-syz" e nome do componente e módulo com "NgSyz"

A convenção é `ng-syz-{ componente }`
Por exemplo:

```ts
@Component({
  selector: 'ng-syz-cpf-search',
})
export class NgSyzCpfSearchComponent {
```
[Veja um exemplo.](./projects/ng-syz/src/lib/cpf-search/cpf-search.component.ts)

```ts
@NgModule({
  ...
})
export class NgSyzCpfSearchModule {}
```

[Veja um exemplo.](./projects/ng-syz/src/lib/cpf-search/cpf-search.module.ts)

### 4. Torne os membros do componente públicos

Faça `export` dos membros que devem ser importados por aplicações que consomem o componente em [`projects/ng-syz/src/public-api.ts`](./projects/ng-syz/src/public-api.ts)

Por exemplo:

```ts
export * from './lib/cpf-search/cpf-search.module';
export * from './lib/cpf-search/cpf-search.component';
```

### 5. Visualize e documente o componente na aplicação de demonstração

Adicione o componente à aplicação de galeria para visualizar o resultado.

#### 5.1 Crie um módulo para a documentação do Componente

Crie o módulo **prefixado com "docs-"**:

Exemplo:

```bash
ng g m features/components/docs-my-component --route my-component --module features/components/components.module.ts
```

Verifique que novo `Route` está no array de `children` do array de `Routes` no `ComponentsRoutingModule`.

```ts
const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      ...
    ]
  }
```

#### 5.2 Adiciona o novo componente ao template

Para validar que está tudo ok, importa o módulo do componente no módulo da documentação e acrescente ao template.

1. Pare o `ng build ng-syz --watch` e o `ng serve app`
2. Execute `ng build ng-syz --watch` novamente e `ng serve app` (Isso é necessário para rebuildar a biblioteca com o módulo e componente novo)
3. importe o módulo do componente no módulo da documentação e acrescente o elemento ao template

Exemplo:
```ts
// projects\app\src\app\features\components\docs-my-component\docs-my-component.module.ts

import { NgSyzMyComponentModule } from '@wizsolucoes/ng-syz';

@NgModule({
  declarations: [DocsMyComponentComponent],
  imports: [
    NgSyzMyComponentModule,
  ],
})
export class DocsMyComponentModule {}
```

```html
<!-- projects\app\src\app\features\components\docs-my-component\docs-my-component.component.html -->

<ng-syz-my-component></ng-syz-my-component>
```

#### 5.3 Adicione um `navItem`

No arquivo `projects\app\src\app\features\components\components.component.ts`, adicione um objeto ao Array `navItems`.

```ts
navItems: NavItem[] = [
  { displayName: 'Busca por CPF/CNPJ', route: 'cpf-search' },
  { displayName: 'Meu componente irado', route: 'my-component' },
];
```

#### 5.4 Documente o novo componente com o componente compartilhado `<app-component-page>`

- Importe `SharedModule` on módulo de documentação
- Use o componente `<app-component-page>` para documentar o componente e adicionar exemplos.

Exemplo:
```html
<app-component-page>
  <ng-syz-my-component></ng-syz-my-component>
</app-component-page>
```
- Use o componente `<app-code-example>` para mostrar trechos de código com os exemplos.

Exemplo:
```html
<app-component-page>
  <app-code-example>
    <ng-syz-my-component></ng-syz-my-component>
  </app-code-example>
</app-component-page>
```
- Você pode incluir quanto exemplos quiser.
Exemplo:
```html
<app-component-page>
  <app-code-example>
    <ng-syz-my-component></ng-syz-my-component>
  </app-code-example>
  
  <app-code-example>
    <ng-syz-my-component></ng-syz-my-component>
  </app-code-example>
</app-component-page>
```

- Veja os parâmetros dos componentes `<app-component-page>` e `<app-code-example>` neste exemplo completo:
```html
<app-component-page
  [title]="'Busca por CPF/CNPJ'"
  [description]="
    'Componente para iniciar busca por CPF ou por CNPJ com máscaras de input. Recebe um texto opcional e emite um evento com o input do usuário quando o botão é clicado.'
  "
  [selector]="'ng-syz-cpf-search'"
  [importCode]="importCode"
  [componentProps]="componentProps"
  [componentCSSVariables]="componentCSSVariables"
>
  <!-- Begin examples in `app-code-example` tags -->

  <!-- Example 1 -->
  <app-code-example [htmlCode]="htmlExampleCode" [tsCode]="tsExampleCode">
    <ng-syz-cpf-search
      [message]="'Acompanhe seus pedidos!'"
      (buttonClick)="onCpfSeachButtonClick($event)"
    ></ng-syz-cpf-search>
  </app-code-example>

  <!-- End examples -->
</app-component-page>
```
[projects/app/src/app/features/components/docs-cpf-search/docs-cpf-search.component.html](./projects/app/src/app/features/components/docs-cpf-search/docs-cpf-search.component.html)

#### 5.5 Criando exemplos de componentes de página inteira

Quando convier mostrar o exemplo de um componente em "tela cheia", como uma página de login, crie um componente com rota própria no módulo `features/components/examples-pages` para cada exemplo.

1. Crie o módulo.

Exemplo:

```bash
ng g m features/components/examples-pages/login-flow-example-one --route login-flow-example-one --module features/components/examples-pages/examples-pages.module.ts
```

1. Acrescente o componente ao template. [Exemplo](./projects/app/src/app/features/components/examples-pages/example-flow-example-one/example-flow-example-one.component.html)

```html
<!-- projects\app\src\app\features\components\examples-pages\example-flow-example-one\example-flow-example-one.component.html -->

<ng-syz-login-flow-example></ng-syz-login-flow-example>
```

3. No _slot_ do `<app-code-example>` insira um link que abra a página do exemplo em um nova aba. [Exemplo](./projects/app/src/app/features/components/docs-example-flow/docs-example-flow.component.html)

## Testando o componente em outra aplicação

### 1. Gere um distribuível da biblioteca

```bash
# Faça um build de produção
npm run build:lib:prod

# Entre na pasta do build gerado
cd projects/ng-syz/build
# Gere tarball eg. wizsolucoes-ng-syz-1.0.1.tgz
npm pack
```

### 2. Instale o distribuível na outra aplicação

```bash
# Entrar na pasta da aplicação
cd my-app

# Instalar biblioteca
npm i ../<path-to>/ng-syz/dist/ng-syz/wizsolucoes-ng-syz-x.x.x.tgz
```

### 3. Adicione o componente à aplicação

Importa o módulo do componente no módulo da aplicação e adicione o componente à interface.

## Contribuição, homologação e CI/CD

Ao finalizar o desenvolvimento, basta criar uma branch `release/*` para que a galeria com os componentes atualizados seja publicada para homologação.

A URL de homologação é https://sysstorybookhmlstg.z13.web.core.windows.net/

Depois de criar a branch `release/*` você deve abrir um PR. O PR precisa ser aprovador por um membro do _team_ **[syz-approvers](https://github.com/orgs/wizsolucoes/teams/syz-approvers/members)**.

Quando o PR for aceito e houver merge na branch `master`´, a biblioteca será publicada para **[npm](https://www.npmjs.com/package/@wizsolucoes/ng-syz)** e a galeria será publicada para a página de produção.
