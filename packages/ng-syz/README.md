<!-- omit in toc -->
# NgSyz

- [Sobre](#sobre)
- [Desenvolvimento](#desenvolvimento)
  - [Por onde começar](#por-onde-começar)
  - [Desenvolvimento com live reload](#desenvolvimento-com-live-reload)
- [Adicionando um componente](#adicionando-um-componente)
  - [1. Crie uma nova pasta para o módulo do novo componente em `projects/ng-syz/src/lib`](#1-crie-uma-nova-pasta-para-o-módulo-do-novo-componente-em-projectsng-syzsrclib)
  - [2. Adicione dependências do componente a `peerDependencies` no `projects/ng-syz/package.json`.](#2-adicione-dependências-do-componente-a-peerdependencies-no-projectsng-syzpackagejson)
  - [3. Prefixe o seletor do componente com "ng-syz"](#3-prefixe-o-seletor-do-componente-com-ng-syz)
  - [4. Torne os membros do componente públicos](#4-torne-os-membros-do-componente-públicos)
  - [5. Visualize o resultado na aplicação de demonstração](#5-visualize-o-resultado-na-aplicação-de-demonstração)
- [Testando o componente em outra aplicação](#testando-o-componente-em-outra-aplicação)
  - [1. Gere um distribuível da biblioteca](#1-gere-um-distribuível-da-biblioteca)
  - [2. Instale o distribuível na outra aplicação](#2-instale-o-distribuível-na-outra-aplicação)
  - [3. Adicione o componente à aplicação](#3-adicione-o-componente-à-aplicação)

## Sobre
Uma biblioteca angular com os componentes do design system SYZ e uma aplicação Angular com uma demonstração dos componentes.

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
ng build ng-syz

# Servir a aplicação demo
ng serve app
```

### Desenvolvimento com live reload
Para facilitar o desenvolvimento dos componentes usando a aplicação de demo, use `npm link` para habilitar live reload e evitar a necessidade de instalar a biblioteca a cada build.
```bash
# Entrar na pasta do build na biblioteca
cd dist/ng-syz/

# Fazer link da biblioteca
npm link

# Voltar para a raiz do projeto
cd ../..

# Fazer link na raiz do projeto
npm link

# Buildar biblioteca com flag `watch`
ng build ng-syz --watch

#Servir applicação
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

### 5. Visualize o resultado na aplicação de demonstração
Habilite [desenvolvimento com live reload](#desenvolvimento-com-live-reload) e adicione o componente à aplicação de demo para visualizar o resultado.

Obs: Se você exportar um módulo novo depois de fazer `npm link`, será necessário `npm unlink`ar a biblioteca e `npm link`á-la novamente.

```bash
# Fazer unlink na raiz do projeto
npm unlink

# Entrar na pasta do build na biblioteca
cd dist/ng-syz/

# Fazer unlink da biblioteca
npm unlink

# Depois seguir os passos para npm linkar
```

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