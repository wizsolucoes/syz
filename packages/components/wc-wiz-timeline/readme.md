![Wiz solucoes](https://syz.wizsolucoes.com.br/assets/header/img/logowiz.svg)

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# 💥 Wiz Timeline

Componente de Timeline customizado seguindo as diretrizes do Design System [Sys](https://syz.wizsolucoes.com.br/) da Wiz.

## Como usar

Instale o pacote NPM

```
npm i @wizsolucoes/wiz-timeline
```

Veja como utilizar em cada Framework:

| Frameworks | Link                                                                      |
| ---------- | ------------------------------------------------------------------------- |
| Angular    | [Link](https://github.com/wizsolucoes/wiz-powerbi/wiki/Como-usar-angular) |
| React      | [Link](https://github.com/wizsolucoes/wiz-powerbi/wiki/Como-usar-react)   |
| Vue        | [Link](https://github.com/wizsolucoes/wiz-powerbi/wiki/Como-usar-Vue)     |

[outros](https://stenciljs.com/docs/overview)

## 💠 Componente

Para o componente funcionar corretamente é necessário passar como parâmetro um Array de Objetos seguindo este modelo:

```javascript
timelineObject = [
  {
    Name: "Etapa 1",
    Current: false,
    Completed: true,
  },
  {
    Name: "Etapa 2",
    Current: true,
    Completed: false,
  },
  {
    Name: "Etapa 3",
    Current: false,
    Completed: false,
  },
  {
    Name: "Etapa 4",
    Current: false,
    Completed: false,
  },
];
```

A quantidade de objetos é dinâmica de acordo com sua necessidade.

Os parâmetros do objeto são descritos da seguinte maneira:

| Parâmetro | Tipo    | Descrição                                                                                                                 |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| Name      | string  | Nome que será atribuído para cada etapa da Timeline. Cada etapa possui um nome, por exemplo: (Etapa 1, Etapa 2, Etapa 3). |
| Current   | boolean | Esse parâmetro deve ser 'true' caso seja a etapa atual da Timeline, caso não seja, deve ser 'false'.                      |
| Completed | boolean | Esse parâmetro deve ser 'true' quando a etapa já tiver sido concluída, caso não seja, deve ser 'false'.                   |

Com essa estrura construída, deve-se atribuir para o componente esses dados.

```html
<wiz-timeline [timelineData]="timelineObject"></wiz-timeline>
```

![Timeline](https://i.imgur.com/clxvOU1.png)

## 🧾 Parâmetros

| Parâmetro           | Tipo               | Descrição                                                    |
| ------------------- | ------------------ | ------------------------------------------------------------ |
| timelineData        | `Array of Objects` | Array de objetos que faz a construção da timeline por etapa. |
| completed-dot-color | `string`           | Cor para a etapa que está concluída.                         |
| current-dot-color   | `string`           | Cor para a etapa atual.                                      |
| progress-bar-color  | `string`           | Cor de fundo para a barra de progresso.                      |
| progress-color      | `string`           | Cor de preenchimento da barra de progresso.                  |
| text-color          | `string`           | Cor do texto                                                 |

## 📱 Responsividade

O Componente de Timeline já possui comportamento responsivo nativo, dessa maneira em resoluções menores é dado prioridade para a etapa atual da Timeline.

![Timeline Responsive](https://i.imgur.com/dxEB8fN.png)
