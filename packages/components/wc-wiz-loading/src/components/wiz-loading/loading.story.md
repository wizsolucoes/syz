# Loading

Loading é nosso componente de feedback sobre os processos de carregamento ou computação sendo processados pelo sistema. O acompanhamento do progresso pode ser exibido com detalhes específicos ou em casos que exijam maior tempo de carregamento, são definidos com animações em series repetidas.

## Comportamento
O componente loading conta com uma variação de comportamento que proporciona maior usabilidade e adequação a diferentes tipos de produtos e projetos. de produtos e projetos.

### Spinners
O comportamento spinner é adotado para os casos onde o carregamento pode ser determinado.

<wiz-code-demo>
  <div style="width:65px">
    <wiz-loading
        type="percentage"
        percentage="50">
    </wiz-loading>
  </div>
</wiz-code-demo>

### Continuous Spinners
O comportamento continuous é adotado para os casos onde o carregamento não pode ser determinado.

<wiz-code-demo>
  <div style="width:65px">
    <wiz-loading
      type="spinner-continuous">
    </wiz-loading>
  </div>
</wiz-code-demo>

### Sonar progress feedback
O comportamento sonar é adotado em casos de notificações e alertas, sua visualização é repetida até o momento do acesso a informação.

<wiz-code-demo>
  <div style="width:65px">
    <wiz-loading
      type="feedback-sonar">
    </wiz-loading>
  </div>
</wiz-code-demo>

### Dot progress feedback
O comportamento dot é usado para carregamentos genéricos, sua visualização é repetida até o momento do carregamento da informação.

<wiz-code-demo>
  <div style="width:65px">
    <wiz-loading
      type="feedback-bounce">
    </wiz-loading>
  </div>
</wiz-code-demo>

### Z progress feedback
O comportamento z é usado para carregamentos genéricos, seu uso geralmente é adotado para reforço da marca Wiz, sua visualização é repetida até o momento do carregamento da informação.

<wiz-code-demo>
  <div style="width:45px">
    <wiz-loading
      type="loading-z">
    </wiz-loading>
  </div>
</wiz-code-demo>

### Check progress feedback
O comportamento check é usado em casos específicos em que o carregamento do conteúdo ou a ação necessita dar um resposta positiva ou negativa.

<wiz-code-demo>
  <div style="width:65px">
    <wiz-loading
      type="circle-load-check"
      finish="{{variable}}">
    </wiz-loading>
  </div>
</wiz-code-demo>