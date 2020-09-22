<!-- omit in toc -->
# Contribuindo componentes para o SYZ
Queremos que você ajude e melhorar o SYZ com suas contribuições. Como contribuidor, pedimos que você siga as orientações a seguir. São essenciais para que sua contribuição seja aprovada quando do [code review](./CODE_REVIEW.md).

- [Feature branch](#feature-branch)
- [Criando um novo componente](#criando-um-novo-componente)
- [Adicionando um componente existente](#adicionando-um-componente-existente)
- [Comandos `npm` obrigatórios para cada componente](#comandos-npm-obrigatórios-para-cada-componente)
- [Mensagens de commit](#mensagens-de-commit)
- [Documentando o componente](#documentando-o-componente)
- [Sobre o code review](#sobre-o-code-review)
- [Criando seu PR](#criando-seu-pr)

## Feature branch
Crie uma branch `feature/*` ou `hotfix/*` a partir da branch `master` para desenvolver sua contribuição.

## Criando um novo componente
Crie o novo componente na pasta `packages/components`. Por exemplo, você pode criar um componente StencilJS da seguinte forma:
```bash
# Entre na pasta dos componentes
cd packages/components/

# Crie o novo componente
npm init stencil
###
```

**IMPORTANTE: Os nomes das pastas de componentes precisam estar no formato `wc-wiz-{component}`. Por exemplo `wc-wiz-alert`.**


## Adicionando um componente existente
Se você precisa adicionar um componente existente, basta colocar o pacote inteiro na pasta `packages/components` e remover a pasta `.git` do componente. Por exemplo:

```bash
# Entre na pasta dos componentes
cd packages/components/

# Na pasta packages, clone o repositório existente
git clone git@github.com:wizsolucoes/wc-wiz-component.git

# Remova a pasta de git do componente
rm -rf wc-wiz-component/.git
###
```

**IMPORTANTE: Os nomes das pastas de componentes precisam estar no formato `wc-wiz-{component}`. Por exemplo `wc-wiz-alert`.**


## Comandos `npm` obrigatórios para cada componente
Confirme que o pacote do componente tenha comandos para os scripts `test` e `build`. Por exemplo:
```json
"scripts": {
  "build": "stencil build --docs",
  "test": "stencil test --spec --e2e"
},
```

## Mensagens de commit
As mensagens de commit têm que seguir a convenção de [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) que é o padrão para todos os projetos da Wiz. Este projeto já tem commit lint configurado com [husky](https://github.com/typicode/husky) para te ajudar.

**É de extrema importância** seguir a convenção porque o Lerna irá usar as mensagens de commit para **automaticamente** atualizar o número de versionamento semântico no arquivo `package.json` e criar um arquivo de `CHANGELOG.md` para cada componente de acordo com as mensagens de commit.

Você, como desenvolvedor, não precisa de preocupar com versionamento ou publicação. Basta criar commits com o tipo apropriado. [Por favor, consulte a convenção Angular se tiver dúvidas sobre o tipo correto para seu commit.](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)

## Documentando o componente
É necessário submeter a documentação com demos interativos do componente junto com a implementação no seu PR. Para isso, siga nosso [guia de documentação.](DOCUMENTING.md)

## Sobre o code review
Verifique que seu PR atenda os itens do [Checklist de code review](./CODE_REVIEW.md).

## Criando seu PR
 Ao finalizar o desenvolvimento, crie uma branch `release/*` antes de abrir um PR. A criação da branch `release/*` aciona a publicação da documentação do componentes na página do site de homologação do SYZ.

Você pode conferir a página de documentação do seu componente no [site de homologação](http://wizis-hml-web.azurewebsites.net/) antes de abrir o PR.

Se estiver satisfeito com sua branch de `release/*`, abra um PR da `release/*` para a branch `master`. Por favor, inclua um link para a página de documentação no seu PR no site de homologação.