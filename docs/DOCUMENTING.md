<!-- omit in toc -->
# Documentando o componente

É necessário submeter a documentação para o site do SYZ com demos interativos do componente junto com a implementação no seu PR. O processo de documentação é muito simples.

- [Como criar uma página de documentação](#como-criar-uma-página-de-documentação)
- [Conteúdo da documentação](#conteúdo-da-documentação)
  - [Descrição do componente](#descrição-do-componente)
  - [Demos interativos](#demos-interativos)
  - [Tabela de parâmetros do componente](#tabela-de-parâmetros-do-componente)
  - [Tabela de customização com variáveis CSS](#tabela-de-customização-com-variáveis-css)
  - [Como usar](#como-usar)
- [Como minha documentão aparece automagicamente no site do SYZ?](#como-minha-documentão-aparece-automagicamente-no-site-do-syz)
- [Como visualizar a documentação no ambiente de desenvolvimento](#como-visualizar-a-documentação-no-ambiente-de-desenvolvimento)

## Como criar uma página de documentação
Para criar documentação do seu componente no site do SYZ, basta escrever um ***story***. Um *story* é um arquivo markdown com nome e extensão no formato `{component}.story.md` na pasta do código fonte do componente.

Como exemplo, veja como o arquivo [alert.story.md](packages\components\wc-wiz-alert\src\components\wc-wiz-alert\alert.story.md) gera a página do componente de *Alert* no site do SYZ: http://wizis-hml-web.azurewebsites.net/components/alert.

## Conteúdo da documentação
A documentação de cada componentes dever conter os seguintes itens:

### Descrição do componente
Uma descrição da função do componente e dos seus principais casos de uso.

### Demos interativos
Para gerar demos interativos do componentes, basta inserir um bloco de html no *story* com exemplos de uso do componente envoltos pelo tag html `<wiz-code-demo>`. Por exemplo:

```html
<wiz-code-demo>
  <wiz-alert type="success" btnclose="true">Este é um alerta de sucesso - confira!</wiz-alert>
</wiz-code-demo>
```

É importante criar demos com as variações dos parâmetros principais do componentes. Por exemplo, para a [documentação do componente de *Alert*](http://wizis-hml-web.azurewebsites.net/components/alert), demos de alerta de sucesso, de erro, de aviso e de informação são esperados.

### Tabela de parâmetros do componente
Esta tabela descreve cada propriedade do componente, com uma descrição, o tipo, e o valor default. 

A documentação [auto-gerada pelo Stencil](https://stenciljs.com/docs/docs-readme) atende este requisito. Veja um exemplo:

| Property   | Attribute  | Description                                                                         | Type     | Default     |
|------------|------------|-------------------------------------------------------------------------------------|----------|-------------|
| `btnclose` | `btnclose` | Determina se a  alerta pode ser fechado. Valores permitidos: [ "true", "false"]     | `string` | `undefined` |
| `type`     | `type`     | Tipo da altera. Valores permitidos: [ "success", "error", "warning", "information"] | `string` | `undefined` |

### Tabela de customização com variáveis CSS
Esta tabela descreve quais caraterísticas visuais do componente podem ser customizadas com variáveis CSS, quando definidos no `document` hospedeiro do componente. Por exemplo:

| Variable              | Description              |
|-----------------------|--------------------------|
| `--wiz-primary-color` | A cor da fundo do botão. |

### Como usar
Uma seção que explique como instalar o componente e que inclua **pelo menos 1 exemplo do uso do componente em Angular**.

## Como minha documentão aparece automagicamente no site do SYZ?
Durante o processo de CI/CD, o script [docs.js](./docs.js) neste repositório é acionado para extrair os *stories* e os *builds* dos componentes e copiá-los para a pasta de assets do site. O site, por sua vez, tem a lógica para renderizar as páginas, baseadas nos *stories*.

## Como visualizar a documentação no ambiente de desenvolvimento
O site do SYZ é uma aplicação Angular. Para fazer testes da sua documentação e debugá-la no ambiente de desenvolvimento, você precisa de uma cópia do site no seu ambiente de desenvolvimento.

Você pode seguir estes 4 passos simples:

<!-- omit in toc -->
### 1. Clonar o repositório do site do SYZ e instale as dependências
```bash
git clone git@example.com:wizsolucoes/syz/site.git # substituir com a url real
```

<!-- omit in toc -->
### 2. *Buildar* o componente que você está documentando (ou todos os componentes)
```bash
# neste mono repo, entrar na pasta do componente cuja documentação que você quer testar
cd syz/packages/components/wc-wiz-{component}
npm run build

# -- OU --

# para buildar todos os componentes, executar na raiz deste mono repo de componentes
npm run build
```

<!-- omit in toc -->
### 3. Executar o script `docs.js`, passando o caminho para o site do SYZ (clonado no primeiro passo), como o argumento de `--site-path`.
```bash
# executar na raiz deste mono repo de componentes
node docs.js --site-path=path/to/site/
```

<!-- omit in toc -->
### 4. Servir o site 
```bash
# entrar na pasta do site que você clonou no primeiro passo
cd path/to/site/

# instalar as dependências do site
npm install

# servir a aplicação
ng serve
```
