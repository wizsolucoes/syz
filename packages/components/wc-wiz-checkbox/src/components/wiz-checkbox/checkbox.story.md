# Checkbox

Checkbox é nosso componente de seleção, geralmente utilizado para coletar respostas dos usuários. O componente pode ser usado para um único item selecionável ou para uma lista de itens de seleção. Um Checkbox tem dois estados principais; selecionado e desmarcado. É importante sempre usar um texto de apoio para descrever a finalidade do checkbox.

## Comportamento
O componente checkbox conta com dois comportamentos, selecionado e desmarcado. que proporciona maior usabilidade e adequação a diferentes tipos de produtos e projetos.

### Habilitado

<wiz-code-demo>
  <wiz-checkbox
    disabled=false
    (returnEvent)="teste($event)">
  </wiz-checkbox>
</wiz-code-demo>

### Desabilitado

<wiz-code-demo>
  <wiz-checkbox
    disabled=true
    (returnEvent)="teste($event)">
  </wiz-checkbox>
</wiz-code-demo>