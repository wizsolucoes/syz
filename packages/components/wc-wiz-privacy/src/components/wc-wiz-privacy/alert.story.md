# Alert

Alert é o nosso componente que tem como atributo a função de alerta, usado para comunicar eventos acionáveis ou informação relevantes e suplementares. Sua estrutura foi construída com o objetivo de comunicar o usuário por meio de mensagens de alerta dentro de um fluxo ou como feedback de uma ação.

## Status
O componente alert conta com uma variação de 4 tipos de status diferente; Error - Success - Warning - Information, para assim atender uma maior variação de notificação para os produtos e fluxos.

<wiz-code-demo>
  <wiz-alert type="success" btnclose="true">Este é um alerta de sucesso - confira!</wiz-alert>
</wiz-code-demo>

<br>

<wiz-code-demo>
  <wiz-alert type="error" btnclose="true">Este é um alerta de erro - confira!</wiz-alert>
</wiz-code-demo>

<br>

<wiz-code-demo>
  <wiz-alert type="warning" btnclose="true">Este é um alerta de warning - confira!</wiz-alert>
</wiz-code-demo>

<br>

<wiz-code-demo>
  <wiz-alert type="information" btnclose="true">Este é um alerta de warning - confira!</wiz-alert>
</wiz-code-demo>

<br>

## Properties

| Property   | Attribute  | Description | Type     | Default     |
| ---------- | ---------- | ----------- | -------- | ----------- |
| `btnclose` | `btnclose` |             | `string` | `undefined` |
| `time`     | `time`     |             | `number` | `undefined` |
| `type`     | `type`     |             | `string` | `undefined` |


## Como usar
### Instalação
```bash
npm i @wizsolucoes/wiz-alerts
```

### Configuração
Veja a configuração necessária para usar o componente na página [Como usar os componentes](https://github.com/wizsolucoes/syz/blob/master/docs/HOW_TO_USE.md).


### Exemplos de integração com frameworks web
#### Angular
```html
<wiz-alert [type]="success" [btnclose]="true">Este é um alerta de sucesso - confira!</wiz-alert>
```

