# Timeline

## Exemplo

![Timeline](https://i.imgur.com/clxvOU1.png)


```html
<wiz-timeline></wiz-timeline>

<script>
  const TimelineComponent = document.querySelector("wiz-timeline");

  TimelineComponent.timelineData = [
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
</script>
```

## Como usar

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

As propriedades do objeto são descritas da seguinte maneira:

| Parâmetro | Tipo    | Descrição                                                                                                                 |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| Name      | string  | Nome que será atribuído para cada etapa da Timeline. Cada etapa possui um nome, por exemplo: (Etapa 1, Etapa 2, Etapa 3). |
| Current   | boolean | Esse parâmetro deve ser 'true' caso seja a etapa atual da Timeline, caso não seja, deve ser 'false'.                      |
| Completed | boolean | Esse parâmetro deve ser 'true' quando a etapa já tiver sido concluída, caso não seja, deve ser 'false'.                   |

Com essa estrura construída, deve-se atribuir para o componente esses dados.


### Como usar em Angular

```html
<wiz-timeline [timelineData]="timelineObject"></wiz-timeline>
```


### 🧾 Parâmetros

| Parâmetro           | Tipo               | Descrição                                                    |
| ------------------- | ------------------ | ------------------------------------------------------------ |
| timelineData        | `Array of Objects` | Array de objetos que faz a construção da timeline por etapa. |
| completed-dot-color | `string`           | Cor para a etapa que está concluída.                         |
| current-dot-color   | `string`           | Cor para a etapa atual.                                      |
| progress-bar-color  | `string`           | Cor de fundo para a barra de progresso.                      |
| progress-color      | `string`           | Cor de preenchimento da barra de progresso.                  |
| text-color          | `string`           | Cor do texto                                                 |


### 📱 Responsividade

O Componente de Timeline já possui comportamento responsivo nativo, dessa maneira em resoluções menores é dado prioridade para a etapa atual da Timeline.

![Timeline Responsive](https://i.imgur.com/dxEB8fN.png)
