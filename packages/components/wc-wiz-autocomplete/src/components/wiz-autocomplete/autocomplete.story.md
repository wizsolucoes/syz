# Autocomplete

Autocomplete é nosso componente de pesquisa com inteligência de complemento automático do que está sendo digitado. O recurso permite que o usuário consiga refinar sua busca em um nível direto e preciso usando a sugestão da complementação automática. O grande objetivo é otimizar e melhorar a performance dos fluxos de pesquisa e resposta.

## Comportamento
O componente autocomplete conta com uma variação de comportamento que proporciona maior usabilidade e adequação a diferentes tipos de produtos e projetos.

### Campo aberto
O comportamento campo aberto é uma opção para áreas maiores ou sem limitação de espaço.

<wiz-code-demo>
  <wiz-autocomplete data='[{
    "email":"john.doe@test.com.br",
    "name":"John Doe"
    },
    {
      "email":"aldrey.doe@test.com.br",
      "name":"Audrey Doe"
    },
    {
      "email":"potter.doe@test.com.br",
      "name":"Potter Doe"
    }]'
    search-result='name'
    search-item='name'
    (returnAutoComplete)="returnAutoComplete($event)"
    (getInputValue)="getInputAutoComplete($event)"
  ></wiz-autocomplete>
</wiz-code-demo>