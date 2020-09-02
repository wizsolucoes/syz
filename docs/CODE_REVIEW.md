<!-- omit in toc -->
# Checklist de code review
Olá reviewer! Por favor, revise os seguintes item quando fizer um code review de alterações neste repositório.

- [Controle de versionamento](#controle-de-versionamento)
- [Componentes](#componentes)
- [Documentação de componentes](#documentação-de-componentes)
- [package.json de componentes](#packagejson-de-componentes)

## Controle de versionamento 
- [ ] PRs para a branch `master` sempre são de uma branch `release/*`
- [ ] As mensagens de commit seguem a convenção de [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [ ] Os tipos das mensagens de commit são condizentes com as alterações que foram feitas
- [ ] O último build do pipeline de CI/CD se completou com sucesso

## Componentes
- [ ] Os nomes das pastas de componentes está no formato `wc-wiz-{component}`. Por exemplo, `wc-wiz-alert`.
- [ ] Caraterísticas visuais dos componentes podem ser customizados com [variáveis CSS](DOCUMENTING.md##tabela-de-customização-com-variáveis-css), onde cabível.
- [ ] Existe um arquivo `LICENSE` no componente com o conteúdo da [licença MIT padrão](https://opensource.org/licenses/MIT)

## Documentação de componentes
- [ ] Na pasta do componente existe um arquivo de documentação no formato `{component}.story.md`. Por exemplo `alert.story.md`.
- [ ] A documentação do componente segue o [Guia de Documentação.](./DOCUMENTING.md)
- [ ] A documentação inclui **pelo menos 1 exemplo do uso do componente em Angular**.
- [ ] A documentação aparece corretamente na página de homologação do site do SYZ: http://wizis-hml-web.azurewebsites.net/

## package.json de componentes
- [ ] `name` está no formato `@wizsolucoes/wiz-{component}`. Por exemplo, `@wizsolucoes/wiz-button`
- [ ] `publishConfig` e `private` definem o componente como um pacote com acesso público:
```json
  "publishConfig": {
    "access": "public"
  },
  "private": false,
```
- [ ] `license` é MIT
- [ ] `homepage` aponta para o README do componente e não para o monorepositório
- [ ] `repository` aponta para este repositório:
```json
  "repository": {
    "type": "git",
    "url": "https://github.com/wizsolucoes/syz"
  },
```