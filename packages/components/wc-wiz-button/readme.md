![Wiz solucoes](https://syz.wizsolucoes.com.br/assets/header/img/logowiz.svg)

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# 💥 Wiz Button

Componente de Botão totalmente customizado seguindo as diretrizes do Design System [Sys](https://syz.wizsolucoes.com.br/) da Wiz.

## Como usar

Instale o pacote NPM

```
npm i @wizsolucoes/wiz-button
```

Veja como utilizar em cada Framework:

| Frameworks | Link                                                                      |
| ---------- | ------------------------------------------------------------------------- |
| Angular    | [Link](https://github.com/wizsolucoes/wiz-powerbi/wiki/Como-usar-angular) |
| React      | [Link](https://github.com/wizsolucoes/wiz-powerbi/wiki/Como-usar-react)   |
| Vue        | [Link](https://github.com/wizsolucoes/wiz-powerbi/wiki/Como-usar-Vue)     |

[outros](https://stenciljs.com/docs/overview)

## 💠 Componente

```html
<wiz-button>Click</wiz-button>
```

## 🧾 Parâmetros

| Parâmetro  | Tipo                           | Descrição                                                                                                                      | Default          |
| ---------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| color      | `"primary","secundary"`        | É possível escolher entre o botão primário ou secundário do SYS.                                                               | `"primary"`      |
| disabled   | `boolean`                      | Ao desejar desabilitar o botão deve-se usar o atributo 'disabled'.                                                             | `false`          |
| responsive | `"default-size", "full-width"` | O parâmetro 'full-width' permite que o botão assuma 100% de largura, já o "default-size" permanece do tamanho definido no SYS. | `"default-size"` |
| shape      | `"square", "round"`            | É possível escolher a forma do botão, podendo ser "square" que não possui border-radius, ou "round" que possui border-radius.  | `"square"`       |
| size       | `"large", "medium", "small"`   | Os tamanhos dos botões são determinados através do SYS podendo escolher entre "large", "medium" ou "small".                    | `"medium"`       |
| type       | `"button", "reset", "submit"`  | O tipo do botão determina o comportamento dele na interface, podendo ter variações entre "button", "reset" ou "submit".        | `"button"`       |

## 🌐 Global Styles

Caso deseje aplicar o estilo de cor próprio dos botões é necessário implementar cada cor desejada como variável global em seu projeto.

```css
:root {
  --primary-button: "#cor-primária";
  --primary-button-hover: "#cor-primária-hover";
  --secondary-button: "#cor-secundária";
  --secondary-button-hover: "#cor-secundária-hover";
}
```
