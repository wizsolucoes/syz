<!-- omit in toc -->
# NgSyz

- [Sobre](#sobre)
  - [Estrutura](#estrutura)
- [Desenvolvimento](#desenvolvimento)
  - [Por onde começar](#por-onde-começar)
- [Adicionando um componente](#adicionando-um-componente)
  - [1. Crie uma nova pasta para o módulo do novo componente em `projects/ng-syz/src/lib`](#1-crie-uma-nova-pasta-para-o-módulo-do-novo-componente-em-projectsng-syzsrclib)
  - [2. Adicione dependências do componente a `peerDependencies` no `projects/ng-syz/package.json`.](#2-adicione-dependências-do-componente-a-peerdependencies-no-projectsng-syzpackagejson)
  - [3. Prefixe o seletor do componente com "ng-syz"](#3-prefixe-o-seletor-do-componente-com-ng-syz)
  - [4. Torne os membros do componente públicos](#4-torne-os-membros-do-componente-públicos)
  - [5. Visualize e documente o componente na aplicação de demonstração](#5-visualize-e-documente-o-componente-na-aplicação-de-demonstração)
    - [5.1 Crie um módulo para a documentação do Componente](#51-crie-um-módulo-para-a-documentação-do-componente)
    - [5.2 Adiciona o novo componente ao template](#52-adiciona-o-novo-componente-ao-template)
    - [5.3 Adicione um `navItem`](#53-adicione-um-navitem)
    - [5.4 Documente o novo componente com o componente compartilhado `<app-component-page>`](#54-documente-o-novo-componente-com-o-componente-compartilhado-app-component-page)
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
```bash
# Instalar dependências
npm install

# Executar testes da biblioteca
ng test ng-syz

# Executar testes da aplicação de demo
ng test app

# Buildar biblioteca
ng build ng-syz --watch

# Servir a aplicação demo
ng serve app
```

## Adicionando um componente
### 1. Crie uma nova pasta para o módulo do novo componente em `projects/ng-syz/src/lib`
Cada componente é um módulo Angular. [Veja um exemplo.](./projects/ng-syz/src/lib/cpf-search/cpf-search.module.ts) Crie uma nova pasta e para o `NgModule` e todos os arquivos do compontente (`.ts|.html|.css|.spec.ts`). 


### 2. Adicione dependências do componente a `peerDependencies` no `projects/ng-syz/package.json`.
Adicione dependências do componente como propriedade de `peerDependencies` no [`projects/ng-syz/package.json`](./projects/ng-syz/package.json).

   
### 3. Prefixe o seletor do componente com "ng-syz"
A convenção é `ng-syz-{ componente }`
Por exemplo:
```ts
@Component({
  selector: 'ng-syz-cpf-search',
})
```
[Veja um exemplo.](./projects/ng-syz/src/lib/cpf-search/cpf-search.component.ts)

### 4. Torne os membros do componente públicos
Faça `export` dos membros que devem ser importados por aplicações que consomem o componente em [`projects/ng-syz/src/public-api.ts`](./projects/ng-syz/src/public-api.ts)

Por exemplo:
```ts
export * from './lib/cpf-search/cpf-search.module';
export * from './lib/cpf-search/cpf-search.component';
```

### 5. Visualize e documente o componente na aplicação de demonstração
Habilite [desenvolvimento com live reload](#desenvolvimento-com-live-reload) e adicione o componente à aplicação de demo para visualizar o resultado.

#### 5.1 Crie um módulo para a documentação do Componente
Crie o módulo **prefixado com "docs-"**:
```bash
ng g m features/components/docs-my-component --route my-component --module features/components/components.module.ts
```

Verifique que novo `Route` está na array de `Children` do `ComponentsRoutingModule`.
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
Para validar que está tudo ok, importa o módulo do componente no módulo da documentação e acrescente ao template

```html
<!-- projects\app\src\app\features\components\my-component\my-component.component.html -->

<my-component></my-component>
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
- Use o componente `<app-code-example>` para mostrar trechos de código com os exemplos.

## Testando o componente em outra aplicação
### 1. Gere um distribuível da biblioteca
```bash
# Faça um build de produção
ng build ng-syz --prod

# Entre na pasta do build gerado
cd dist/ng-syz

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

Quando o PR for aceito e houver merger na branch `master`´, a biblioteca será publicada para **[npm](https://www.npmjs.com/package/@wizsolucoes/ng-syz)** e a galeria será publicada para a página de produção. 



