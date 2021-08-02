## Regulamento

### Formato
- O evento acontecerá somente **online** em reunião virtual.
- A participação no hackathon será em **duplas**.
- Durante a maratona **cada dupla** deve **escolher os componentes** que deseja desenvolver de um **pool de componentes predefinido** pela equipe de advisors da Wiz.
- O **objetivo** de cada dupla é entregar o **máximo de pontos** que puder.
- A pontuação é uma ponderação da **quantidade** de componentes entregues e a **complexidade** e a **qualidade** dos componentes.

### Inscrições
- As inscrições acontecerão entre os dias **30/07/2021 e 12/08/2021**. 
- As inscrições são gratuitas e deverão ser feitas exclusivamente acessando o link do [Formulário de inscrição](https://forms.office.com/r/5ADMEBd402).
- Os interessados poderão fazer a inscrição em dupla ou individualmente.
- Em caso de inscrições individuais, as duplas serão formadas até o dia do evento, a critério da Wiz.
- Na impossibilidade de formação de duplas, o último inscrito poderá participar individualmente.

### Data e Local
- Serão criadas uma ou mais reuniões virutais para o evento e o convite será enviado para os inscritos, o qual não deverá ser compartilhado com terceiros. 
- O 1º Hackathon – HackaSyz acontecerá em duas sextas-feiras 20/08/2021 e 27/08/2021 das 9h às 18h.

### Desenvolvimento e entrega
- Cada dupla deve seguir [os passos da documentação do NgSyz](https://github.com/wizsolucoes/syz/tree/master/packages/ng-syz#desenvolvimento) para **preparar seu ambiente de desenvolvimento**.
- É fortemente recomendado preparar o ambiente de desenvolvimento **antes do início do evento**.
- O desenvolvimento da dupla deve ser feita em uma branch criada pela dupla no monorepositório do Syz a partir da branch **`master`**.
- O nome da branch com o desenvolvimento da dupla deve começar com **`"hackathon/"`**, por exemplo `"hackathon/dupla-dinamica"`. É necessário seguir essa nomenclatura para fazer a entrega.
- A entrega da dupla é um **Pull Request** da sua branch para a branch `master` **que passe em todos os passos do pipeline de CI/CD**.
- O repositório já tem [um Azure Pipeline](https://github.com/wizsolucoes/syz/blob/master/azure-pipelines.yml) e a dupla não deve criar ou modificar o pipeline de CI/CD.
- Os passos de CI/CD serão:
  - Testes automatizados na biblioteca e da aplicação de demo
  - Lint da biblioteca e da aplicação de demo
  - Análise SonarQube da biblioteca e da aplicação de demo
  - Publicação da aplicação de demo para um ambiente pré-determinado pela organização do evento
- Os participantes poderão solicitar ajuda da equipe de apoio e/ou de outros participantes a qualquer momento.

### Horário do evento
- O evento acontecerá nos dias 20 e 27 de agosto de 2021 das 9h às 18h.
- Os colaboradores participantes serão liberados das atividades da squad durante os dias do hackaton (20 e 27 de agosto).
- Após o início das atividades do evento, os inscritos deverão permanecer online durante o tempo inteiro do evento.
- O desenvolvimento dos componentes está limitado ao horário da jornada normal de trabalho e os participantes não podem fazer horas extras de trabalho para desenvolver os componentes do hackathon.

### Critérios de avaliação para pontuação
Para pontuação, serão avaliadas a **quantidade** de componentes entregues, assim como a sua **complexidade** e **qualidade**. Em caso de empate, a hora da entrega será considerada como critério de desempate.

#### Quantidade
A quantidade de componentes entregues é quantidade inseridos na biblioteca e que tenham uma página de documentação com **pelo menos dois exemplos de uso** na aplicação de demo.

#### Complexidade
Para cada componente no pool de componentes, uma complexidade será previamente atribuída pela equipe de advisors.

#### Qualidade
Cada item a seguir corresponde a 1/3 da nota de qualidade:
- Completude da documentação do componente
- Cobertura e qualidade dos testes automatizados
- Adaptabilidade do componente para ser usado em diversos contextos

##### Completude da documentação do componente
- A aba de **"Sobre"** deve conter o título, descrição e seletor do componente.
- A aba de **"Exemplos"** deve ter pelo menos **2 exemplos** e cada exemplo deve mostrar o código `ts`, `html` e `css` correspondente.
- A aba de **"API"** deve ter o código para importar o módulo do componente e a tabela de propriedades e variáveis CSS devem estar preenchidas.
  
> Dica: Veja um [exemplo completo de documentação de um componente](https://ng-syz.wizsolucoes.com.br/components/cpf-search) na página do NgSyz.

##### Cobertura e qualidade dos testes automatizados
- A cobertura de testes considerada será a na análise SonarQube.
  - Você pode visualizar a cobertura localmente executando `ng test ng-syz --code-coverage` e `ng test app --code-coverage`
- O _suite_ de testes deve rodar sem erros ou _warnings_ relacionados aos componentes. (Lembre que `--browsers="ChromeHeadless"` é seu amigo :D)

##### Adaptabilidade do componente
- As principais **cores** do componente devem consumir **variáveis de CSS**, onde aplicável.
- O **conteúdo é parametrizável** via `@Inputs()`, onde aplicável.
- O componente **emite eventos** como `@Outputs()`, onde aplicável.

No primeiro dia de maratona (20 de agosto), será apresentada aos participantes a matriz com os critérios de avaliação que serão utilizados para selecionar os vencedores. 

### Premiação

Os vencedores receberão cartões pré-pago (Touch Card), ou similar, fracionados ou integrais, conforme disponibilidade da Wiz compatível com os descritos abaixo: 
- Para o primeiro lugar: dois cartões com o valor de R$1000,00 (um para cada integrante). 
- Para o segundo lugar: dois cartões com o valor de R$500,00 (um para cada integrante). 
- Para o terceiro lugar: dois cartões com o valor de R$300,00 (um para cada integrante). 
- Para a dupla que desenvolver o componente mais utilizado nos projetos da Wiz. Essa avaliação será feita um mês após o último dia do evento: dois cartões com o valor de R$350,00 (um para cada integrante). 
- Para a escolha do público: dois cartões com o valor de R$200,00 (um para cada integrante). 

A premiação não tem natureza salarial, sendo concedido por liberalidade pela Wiz, desde que cumprimos os critérios para tanto. 

### Uso de imagem
Os participantes cedem gratuitamente a Wiz, por prazo indeterminado, sem exclusividade, o direito ao uso de sua imagem, texto e/ou voz em qualquer tipo de material. Como contrapartida, a Wiz compromete-se a utilizar a imagem dos participantes sem efetuar modificações na fisionomia dos participantes e ainda a não utilizar a imagem de forma depreciativa, ou que possa representar, sob qualquer forma, algum tipo de violação de dano moral. O uso poderá ser para fins internos ou externos, inclusive após a rescisão contratual.

### Condições Gerais
- A premiação será entregue em até 30 (trinta) dias após a comunicação de apuração.
- Os termos não previstos neste regulamento serão analisados pela Diretoria de Marketing e Tecnologia e pela área de Compliance da Wiz.
- O uso da premiação seguirá as regras de utilização da administração dos cartões ficando a encargo dos premiados observar as regras e validade do prêmio.
- Esse regulamento pode sofrer alterações pontuais que serão comunicadas aos participantes oportunamente. 