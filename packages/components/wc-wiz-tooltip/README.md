

  

![Wiz solucoes](https://syz.wizsolucoes.com.br/assets/header/img/logowiz.svg)

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

  


# ✨ Wiz Tooltip
Indique o local da página atual em uma hierarquia de navegação que adiciona automaticamente separadores via CSS. Seguindo o design system [Sys](https://syz.wizsolucoes.com.br/) da Wiz.
## Como usar 
  
  instala o pacote
```
npm i @wizsolucoes/wiz-tooltip
```


|Frameworks| Link|
|--|--|
|Angular| [Link](https://github.com/wizsolucoes/wiz-powerbi/wiki/Como-usar-angular)|
|React | [Link](https://github.com/wizsolucoes/wiz-powerbi/wiki/Como-usar-react)|
| Vue | [Link](https://github.com/wizsolucoes/wiz-powerbi/wiki/Como-usar-Vue)|
[outros](https://stenciljs.com/docs/overview)



### Componente html
```html

  <wiz-tooltip size='md' direction='bottom' bg-color='#2175d6' label-color='#fff' active-border="true">
    <div slot="content"><label for="">loremx99</label></div>
    <div slot="tooltip-text">
      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </div>
  </wiz-tooltip>
```
> Obs: Se estiver trabalhando com algum _framework_ e seus parâmetros forem dinâmicos devem ser feitos em forma diferente dependendo do _framwork_ assista o vídeo abaixo para entender melhor.
[Web Componentes atributos em framework](https://www.youtube.com/watch?v=sK1ODp0nDbM&feature=youtu.be&t=28m36s)

  
  
## 🧾 Parâmetros


| Parâmetro			| Obrigatório | tipagem | Default | Observação
|-------------------|-------------|----------|------|---|
| size    		| Não	| string	| null	|  Temos três tamanhos de tooltip (sm, md e lg)
| direction    		| Não	| string	| null	|  Temos quatro direções de tooltip (top, bottom, left e right)
| bg-color    		| Não	| string	| null	|  Pode ser passado um hexadecilmal ou o nome exemplo('blue', 'red' entre outros);
| label-color   		| Não	| string	| null	|  Pode ser passado um hexadecilmal ou o nome exemplo('blue', 'red' entre outros);
|active-border   		| Não	| boolean	| null	|  Se quiser utilizar borda basta ativa-la

Projeto fase beta, ajude contribuindo nesse projeto para melhorar! :ok_hand: