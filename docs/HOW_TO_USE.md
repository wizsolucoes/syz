<!-- omit in toc -->
# Como usar os componentes
Vamos *exemplificar* o uso dos componentes com o componente Alert.

- [Instalação](#instalação)
- [Como usar em Angular](#como-usar-em-angular)
- [Como usar em React](#como-usar-em-react)
- [Como usar em Vue](#como-usar-em-vue)

## Instalação
```bash
npm i @wizsolucoes/wiz-alerts
```

## Como usar em Angular

<!-- omit in toc -->
### Passo 1 - Inclua o Schema de Custom Elements nos módulos que usam o componente

```typescript
/* eg. app.moudle.ts */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


@NgModule({
  . . .
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

<!-- omit in toc -->
### Passo 2 - Chame defineCustomElements em `main.ts`

```typescript
import { defineCustomElements as defineWizAlert } from '@wizsolucoes/wiz-alerts/loader';

defineWizAlert();
```

<!-- omit in toc -->
### Passo 3 - Use o tag do componente nos arquivos html
```html
<wiz-alert [type]="success" [btnclose]="true">Este é um alerta de sucesso - confira!</wiz-alert>
```

Você também pode consultar a documentação do StencilJS 
[Stencil documentação Angular](https://stenciljs.com/docs/angular)

## Como usar em React
<!-- omit in toc -->
### Passo 1 - React.Dom
Geralmente você encontra o React.Dom no seguinte caminho `src/index.js` ou `src/index.ts`, esse é o inicializador do React, iremos implementar nosso componente nele. 
***
importe
```js

import { applyPolyfills, defineCustomElements as defineWizAlert } from '@wizsolucoes/wiz-alerts/loader';;

```
no final do arquivo src/index.js você chama o que importou da seguinte maneira.

```js
applyPolyfills().then(() => {
  defineWizAlert();
});
```

Você também pode consultar a documentação do StencilJS 
[Stencil documentação React](https://stenciljs.com/docs/react)


## Como usar em Vue
<!-- omit in toc -->
### Passo 1 - New Vue()
O Vue inicializa através do `New Vue({})`. Geralmente você encontra essa chamada em um arquivo chamado **main.js** que fica dentro da pasta **src ** que é o inicializador do Vue.js. Iremos implementar nosso componente nele. 

importe
```js

import { applyPolyfills, defineCustomElements as defineWizAlert } from '@wizsolucoes/wiz-alerts/loader';

```
Antes do New Vue({...}) adicione a linha abaixo.


```js

Vue.config.ignoredElements = [/wiz-alert/];

applyPolyfills().then(() => {
  defineWizAlert();
});
```

> Você deve adicionar a linha `Vue.config.ignoredElements = [/wiz-alert/]` para que o Vue entenda que isso é um web component.

Você também pode consultar a documentação do StencilJS 
[Stencil documentação Vue](https://stenciljs.com/docs/vue)