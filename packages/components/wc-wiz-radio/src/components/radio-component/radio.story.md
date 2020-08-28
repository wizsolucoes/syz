# Radiobutton

Radiobutton é nosso componente de seleção, geralmente utilizado para coletar respostas únicas dos usuários. O componente é usado para seleção de uma única resposta selecionável. Um Radiobutton tem dois estados principais; selecionado e desmarcado. É importante sempre usar um texto de apoio para descrever a finalidade do Radiobutton.

## Comportamento
O componente radiobutton conta com dois comportamentos, selecionado e desmarcado. que proporciona maior usabilidade e adequação a diferentes tipos de produtos e projetos.

### Habilitado

<wiz-code-demo>
  <wiz-radio-group>
    <wiz-radio (returnEvent)="useValue($event)" disabled="false" value="a" name="a"></wiz-radio>
    <wiz-radio (returnEvent)="useValue($event)" disabled="false" value="b" name="b"></wiz-radio>
    <wiz-radio (returnEvent)="useValue($event)" disabled="false" value="c" name="c"></wiz-radio>
  </wiz-radio-group>
</wiz-code-demo>

### Desabilitado

<wiz-code-demo>
  <wiz-radio-group>
    <wiz-radio (returnEvent)="useValue($event)" disabled="true" value="a" name="a"></wiz-radio>
    <wiz-radio (returnEvent)="useValue($event)" disabled="true" value="b" name="b"></wiz-radio>
    <wiz-radio (returnEvent)="useValue($event)" disabled="true" value="c" name="c"></wiz-radio>
  </wiz-radio-group>
</wiz-code-dem