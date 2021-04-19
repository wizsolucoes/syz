# Modal

Modal é nosso componente de destaque de comunicação, seu objetivo é focar a atenção do usuário para informações e interações interrompendo o processo atual, até que uma ação especifica seja executada. Os modais geralmente são apresentados como camadas sobrepostas ao fundo. É importante ter cautela e moderação no uso das modais.

## Comportamento
O componente modal conta com uma variação de comportamento que proporciona maior usabilidade e adequação a diferentes tipos de produtos e projetos.

### Modal Padrão
O comportamento padrão é adotado nos casos onde o conteúdo é mais extenso e na posição horizontal.

<wiz-code-demo>
  <p id="unique-modal-trigger-id-md" class="btn btn-big">[Clique aqui para abrir o modal]</p>

  <wiz-modal size='md' title-modal="Modal Title" trigger-element-id="unique-modal-trigger-id-md">
    <span slot="modal-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, quam? Rem labore, autem
      excepturi
      obcaecati ab distinctio ad! Voluptatibus neque enim voluptatem rem sit ab quisquam, facere tempore ad
      perferendis?</span>
    <span slot="modal-footer">Conteúdo de footer</span>
  </wiz-modal>
</wiz-code-demo>

### Modal Pop
O comportamento pop é adotado nos casos onde o conteúdo curto e na posição vertical.

<wiz-code-demo>
  <p id="unique-modal-trigger-id-sm" class="btn btn-big">[Clique aqui para abrir o modal]</p>

  <wiz-modal size='sm' title-modal="Modal Title" trigger-element-id="unique-modal-trigger-id-sm">
    <span slot="modal-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, quam? Rem labore, autem
      excepturi
      obcaecati ab distinctio ad! Voluptatibus neque enim voluptatem rem sit ab quisquam, facere tempore ad
      perferendis?</span>
    <span slot="modal-footer">Conteúdo de footer</span>
  </wiz-modal>
</wiz-code-demo>

### Full-Screen
O comportamento padrão é adotado nos casos onde o conteúdo é mais extenso e requer maior atenção.

<wiz-code-demo>
  <p id="unique-modal-trigger-id-lg" class="btn btn-big">[Clique aqui para abrir o modal]</p>

  <wiz-modal size='lg' title-modal="Modal Title" trigger-element-id="unique-modal-trigger-id-lg">
    <span slot="modal-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, quam? Rem labore, autem
      excepturi
      obcaecati ab distinctio ad! Voluptatibus neque enim voluptatem rem sit ab quisquam, facere tempore ad
      perferendis?</span>
    <span slot="modal-footer">Conteúdo de footer</span>
  </wiz-modal>
</wiz-code-demo>

<br/>
<hr>

## Properties

| Property           | Attribute            | Description | Type     | Default     |
| ------------------ | -------------------- | ----------- | -------- | ----------- |
| `size`             | `size`               |             | `any`    | `undefined` |
| `titleModal`       | `title-modal`        |             | `any`    | `undefined` |
| `triggerElementId` | `trigger-element-id` |             | `string` | `undefined` |

