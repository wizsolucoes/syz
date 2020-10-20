# Privacy

Privacy é o nosso componente que tem como objetivo mostrar aos usuários dos sistemas da Wiz um banner informativo sobre a LGPD e o uso de cookies.

## Como usar
### Instalação
```bash
npm i @wizsolucoes/wiz-privacy
```

### Uso

Incluir o componente dentro da tag body
```html
<wiz-privacy></wiz-privacy>

```

### Configuração
Veja a configuração necessária para usar o componente na página [Como usar os componentes](https://github.com/wizsolucoes/syz/blob/master/docs/HOW_TO_USE.md).


### Global Styles

Caso deseje aplicar o estilo de cor próprio dos botões é necessário implementar cada cor desejada como variável global em seu projeto.

```css
:root {
  --background-privacy: #FFFFFF;
  --text-privacy: #50555A;
  --button-privacy: #F56C00;
}
```

