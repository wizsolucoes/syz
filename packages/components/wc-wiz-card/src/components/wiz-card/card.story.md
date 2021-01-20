# ✨ Wiz Card

Componente de CARD. Seguindo o design system [Sys](https://syz.wizsolucoes.com.br/) da Wiz.

## Como usar 

  
  instala o pacote

``` 
npm i @wizsolucoes/wiz-card
```

|Frameworks| Link|
|--|--|
|Angular| [Link](https://github.com/wizsolucoes/wiz-powerbi/wiki/Como-usar-angular)|
|React | [Link](https://github.com/wizsolucoes/wiz-powerbi/wiki/Como-usar-react)|
| Vue | [Link](https://github.com/wizsolucoes/wiz-powerbi/wiki/Como-usar-Vue)|
[outros](https://stenciljs.com/docs/overview)

### Componente html

``` html
<wiz-card 
name="Hugo Rosello" 
occupation="Analista" 
organization="Wiz Soluções" 
profile-url="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
</wiz-card>
```

> Obs: Se estiver trabalhando com algum _framework_ e seus parâmetros forem dinâmicos devem ser feitos em forma diferente dependendo do _framwork_ assista o vídeo abaixo para entender melhor.

[Web Componentes atributos em framework](https://www.youtube.com/watch?v=sK1ODp0nDbM&feature=youtu.be&t=28m36s)

  
  

## 🧾 Parâmetros

| Parâmetro			| Obrigatório | tipagem | Default | Observação
|-------------------|-------------|----------|------|---|
| profile-url    		| sim	| string	| null	| Imagem a ser renderizada|
| name    		| sim	| string	| null	| Nome do usuário|
| occupation    		| sim	| string	| null	| Cargo do usuário|
| organization    		| sim	| string	| null	| Organização do usuário|

## 🩸 Váriaveis CSS

| Parâmetro			| Obrigatório | tipagem | Default | Observação
|-------------------|-------------|----------|------|---|
| --wiz-card-border-color-pic   		| Não	| string	| #FF9100	| Cor borda imagem| 
| --wiz-card-color-name   		| Não	| string	| #50555A	|Cor da label do nome| 
| --wiz-card-occupation   		| Não	| string	| #9BA5AE	| Cor referente ao label de ocupação| 
| --wiz-card-organization  		| Não	| string	| #FF9100	| Cor referente ao background da tag de organização| 

Projeto fase beta, ajude contribuindo nesse projeto para melhorar! :ok_hand:
