# SYZ web components
O monorepositório dos componentes do SYZ.

## Configurando seu ambiente de desenvolvimento
```bash
# Instalar dependências do projeto raíz
npm install

# Instalar dependências dos componentes
npm run bootstrap
```

## Estrutura do projeto
Este repositório agrupa todos os pacotes de componentes do SYZ na pasta `packages`. Usamos o [Lerna](https://lerna.js.org/) para gerenciar os múltiplos pacotes e esta é a estrutura essencial do monorepoistório:

```bash
.
├── lerna.json
├── package.json
└── packages
    └── components
        ├── wc-wiz-alert # componente exemplo
        │   ├── src
        │   └── package.json
        └── wc-wiz-button # componente exemplo
            ├── src
            └── package.json
```


[`lerna.json`](lerna.json) - arquivo de configuração do lerna. [Você pode ver todas as opções de configuração aqui.](https://github.com/lerna/lerna#lernajson)

[`package.json`](package.json) - arquivo com metada relevante ao monorepositório.

`packages` - Esta pasta agrupa os mútliplos pacotes de componentes.


## Contribuindo para o SYZ
Veja o [guia de contribuição](./CONTRIBUTING.md).


## CI/CD
Integração e entrega contínua estão configurados pelo arquivo `azure-pipelines.yml`.

### CI
O pipieline de CI/CD irá *buildar* e testar a solução quando houver commits em qualquer branch. Confirme que cada o pacote tenha comandos para os scripts `test` e `build`, pois Lerna irá executar um `npm build ` e `npm test` para cada um.


### CD
O pipeline de CI/CD está configurado para automaticamente executar o versionamento e a publicação dos pacotes para a organização npm da [@wizsolucoes](https://www.npmjs.com/org/wizsolucoes) quando alterações relevantes entrarem na branch `master`.

Lerna está configurado para ignorar alterções em arquivos de teste e de documentação para gerar novas versões.

## Sobre o Lerna bot
Como mencionado anteriormente, o pipeline de CI/CD está configurado para automaticamente executar o versionamento e a publicação. Estas ações são feitas pelo usuário "Lerna bot" :
- Cria/atualiza o `CHANGELOG.md` de cada componente
- Atualiza a versão no `package.json` de cada componente
- Cria um tag para as novas versões
- Publica cada componente que teve uma nova versão.

Você pode ver as alterações que o "bot" fez na branch `master` depois do merge do um PR:

![Lerna bot creating a commit](https://i.imgur.com/RdxxOLi.jpg "Lerna bot creating a commit")