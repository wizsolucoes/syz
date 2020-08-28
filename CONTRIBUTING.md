# Contribuindo componentes para o SYZ
Leia com atenção as orientações a seguir. São essenciais para que sua contribuição de componentes para o SYZ seja aprovada quando do code review.

## Feature branch
Crie uma branch `feature/*` a partir da branch `master` para desenvolver sua contribuição.

## Criando um novo componente
Crie o novo componente na pasta `packages`. Por exemplo, você pode criar um componente StencilJS da seguinte forma:
```bash
# Entre na pasta de pacotes
cd packages

# Crie o novo componente
npm init stencil
###
```

## Adicionando um componente existente
Basta colocar o pacote inteiro na pasta `packages` e remover a pasta `.git` do componente. Por exemplo, você pode entrar na pasta `packages` e clonar o repositório do componente existente:

```bash
# Entre na pasta de pacotes
cd packages

# Na pasta packages, clone o repositório existente
git clone git@github.com:wizsolucoes/wc-wiz-component.git

# Remove a pasta de git do componente
rm -rf wc-wiz-component/.git
###
```

## Comandos `npm` obrigatórios para cada componente
**Não é preciso fazer qualquer alteração ao arquivo `package.json` do componente ao incluí-lo no monorepositório**.

Confirme apenas que o pacote tenha comandos para os scripts `test` e `build`. Por exemplo:
```json
"scripts": {
  "build": "stencil build --docs",
  "test": "stencil test --spec --e2e"
},
```

## Mensagens de commit
As mensagens de commit têm que seguir a convenção de [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) que é o padrão para todos os projetos da Wiz. Este projeto já tem commit lint configurado com [husky](https://github.com/typicode/husky) para te ajudar.

**É de extrema importância** seguir a convenção porque o Lerna irá usar as mensagens de commit para **automáticamente** atualizar o número de versionamento semântico no arquivo `package.json` e criar um arquivo de `CHANGELOG.md` para cada componente de acordo com as mensagens de commit.

Você, como desenvolvedor, não preicsa de preocupar com verisonamento ou publicação. Basta criar commits com o tipo apropriado. [Por favor, consulte a convenção Angular se tiver dúvidas sobre o tipo correto para seu commit.](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)

## Documentando o componente
É necessário submeter a documentação com demos interativos do componente junto com a implementação no seu PR. Para isso, siga nosso [guia de documentação.](DOCUMENTING.md)

## Criando seu PR
O monorepósitório do SYZ segue [o fluxo de gestão de mudanças corporativo](https://parcorretoradeseguros.sharepoint.com/sites/Chapter.SouBack/Shared%20Documents/Front%20%C3%A9%20meu%20forte/DevOps%20para%20Devz%20-%20Compartilhado.pdf). Os ambientes mencionados no fluxo (HML-DEV, HML-UAT e PRD) correspondem à publicações da documentação com demos interativos do componente.