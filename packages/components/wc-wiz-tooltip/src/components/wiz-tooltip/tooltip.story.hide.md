# Tooltip
Tooltip é nosso componente de informações adicionais para elementos. O seu uso está relacionado a identificação ou adição de pequena quantidade de informação a um elemento, seu objetivo é ajudar o usuário a entender o significado ou a finalidade de um conteúdo ou ação. O componente aparecem ao passar o mouse ou tocar e não são visíveis inicialmente.

## Comportamento
O componente tooltip conta com uma variação de comportamento que proporciona maior usabilidade e adequação a diferentes tipos de produtos e projetos.

### Label
<wiz-code-demo>
  <wiz-tooltip 
    size="md" 
    direction="top"
    bg-color="#50555a" 
    label-color="#fff"
    active-border="false">
    <div slot="content"><label for="">Mouse over</label></div>
    <div slot="tooltip-text">
      Label Here
    </div>
  </wiz-tooltip>
</wiz-code-demo>

### Colour
<wiz-code-demo>
  <div style="display:inline; margin-right: 10px">
    <wiz-tooltip 
      size="md" 
      direction="top"
      bg-color="#50555a" 
      label-color="#fff"
      active-border="false">
      <div slot="content"><label for="">Mouse over</label></div>
      <div slot="tooltip-text">
        Label Here
      </div>
    </wiz-tooltip>
  </div>
  <div style="display:inline; margin-right: 10px">
    <wiz-tooltip 
      size="md" 
      direction="top"
      bg-color="#fff" 
      label-color="#979797"
      active-border="false">
      <div slot="content"><label for="">Mouse over</label></div>
      <div slot="tooltip-text">
        Label Here
      </div>
    </wiz-tooltip>
  </div>
  <div style="display:inline; margin-right: 10px">
    <wiz-tooltip 
      size="md" 
      direction="top"
      bg-color="#2175d6" 
      label-color="#fff"
      active-border="false">
      <div slot="content"><label for="">Mouse over</label></div>
      <div slot="tooltip-text">
        Label Here
      </div>
    </wiz-tooltip>
  </div>
  <div style="display:inline; margin-right: 10px">
    <wiz-tooltip 
      size="md" 
      direction="top"
      bg-color="#00bf85" 
      label-color="#fff"
      active-border="false">
      <div slot="content"><label for="">Mouse over</label></div>
      <div slot="tooltip-text">
        Label Here
      </div>
    </wiz-tooltip>
  </div>
  <wiz-tooltip 
    size="md" 
    direction="top"
    bg-color="#ff3535" 
    label-color="#fff"
    active-border="false">
    <div slot="content"><label for="">Mouse over</label></div>
    <div slot="tooltip-text">
      Label Here
    </div>
  </wiz-tooltip>
</wiz-code-demo>

### Icon + Label
<wiz-code-demo>
  <div style="display:inline; margin-right: 10px">
    <wiz-tooltip 
      size="md" 
      direction="top"
      bg-color="#2175d6" 
      label-color="#fff"
      active-border="false">
      <div slot="content"><label for="">Mouse over</label></div>
      <div slot="tooltip-text">
        <svg height="14" viewBox="0 0 16 14" width="16" xmlns="http://www.w3.org/2000/svg"><g ><g ><path d="M11.333 4.6H4a.667.667 0 1 1 0-1.333h7.333a.667.667 0 1 1 0 1.333zM8.667 7.277H4a.67.67 0 0 1-.667-.672A.67.67 0 0 1 4 5.933h4.667c.368 0 .666.301.666.672a.67.67 0 0 1-.666.672zM14 0H2a2 2 0 0 0-2 2v7.333a2 2 0 0 0 2 2h.173c.184 0 .334.15.334.334v1.873a.467.467 0 0 0 .793.327l2.147-2.147c.249-.25.587-.392.94-.393H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" fill="#f8fbfc"></path></g></g></svg> Label Here
      </div>
    </wiz-tooltip>
  </div>
  <div style="display:inline; margin-right: 10px">
    <wiz-tooltip 
      size="md" 
      direction="top"
      bg-color="#00bf85" 
      label-color="#fff"
      active-border="false">
      <div slot="content"><label for="">Mouse over</label></div>
      <div slot="tooltip-text">
        <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><g><g><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.258 2.415l3.378-3.597a.942.942 0 0 0-.044-1.221.808.808 0 0 0-1.147-.047L7.15 8.508l-1.09-1.16a.808.808 0 0 0-1.146.047.942.942 0 0 0-.044 1.221l1.69 1.8a.809.809 0 0 0 1.19 0z" fill="#f8fbfc"></path></g></g></svg> Label Here
      </div>
    </wiz-tooltip>
  </div>
  <wiz-tooltip 
    size="md" 
    direction="top"
    bg-color="#ff3535" 
    label-color="#fff"
    active-border="false">
    <div slot="content"><label for="">Mouse over</label></div>
    <div slot="tooltip-text">
      <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><g><g><path d="M8.075 6.312a.652.652 0 0 1-.659-.646c0-.356.295-.645.66-.645.364 0 .659.289.659.645a.652.652 0 0 1-.66.646zm.66 4.507a.652.652 0 0 1-.66.644.652.652 0 0 1-.659-.644V7.601c0-.356.295-.644.66-.644.364 0 .659.288.659.644zm7.218-3.417C15.755 3.126 12.025-.184 7.622.008 3.219.2-.19 3.823.008 8.098a7.343 7.343 0 0 0 .957 3.814c.169.308.198.67.08 1L.24 15.344a.31.31 0 0 0 .08.338.333.333 0 0 0 .352.062l2.219-.838c.377-.154.806-.13 1.162.064a8.175 8.175 0 0 0 8.334-.23c2.511-1.594 3.89-4.422 3.565-7.319z" fill="#f8fbfc"></path></g></g></svg> Label Here
    </div>
  </wiz-tooltip>
</wiz-code-demo>

### Guidance
<wiz-code-demo>
  <div style="display:inline; margin-right: 10px">
    <wiz-tooltip 
      size="md" 
      direction="top"
      bg-color="#50555a" 
      label-color="#fff"
      active-border="false">
      <div slot="content"><label for="">Mouse over</label></div>
      <div slot="tooltip-text">
        Label Here
      </div>
    </wiz-tooltip>
  </div>
  <div style="display:inline; margin-right: 10px">
    <wiz-tooltip 
      size="md" 
      direction="bottom"
      bg-color="#50555a" 
      label-color="#fff"
      active-border="false">
      <div slot="content"><label for="">Mouse over</label></div>
      <div slot="tooltip-text">
        Label Here
      </div>
    </wiz-tooltip>
  </div>
  <div style="display:inline; margin-right: 10px">
    <wiz-tooltip 
      size="md" 
      direction="right"
      bg-color="#50555a" 
      label-color="#fff"
      active-border="false">
      <div slot="content"><label for="">Mouse over</label></div>
      <div slot="tooltip-text">
        Label Here
      </div>
    </wiz-tooltip>
  </div>
  <wiz-tooltip 
    size="md" 
    direction="left"
    bg-color="#50555a" 
    label-color="#fff"
    active-border="false">
    <div slot="content"><label for="">Mouse over</label></div>
    <div slot="tooltip-text">
      Label Here
    </div>
  </wiz-tooltip>
</wiz-code-demo>

### Size
<wiz-code-demo>
  <div style="display:inline; margin-right: 10px">
    <wiz-tooltip 
      size="md" 
      direction="top"
      bg-color="#2175d6" 
      label-color="#fff"
      active-border="false">
      <div slot="content"><label for="">Mouse over</label></div>
      <div slot="tooltip-text">
        Label Here
      </div>
    </wiz-tooltip>
  </div>
  <wiz-tooltip 
    size="lg" 
    direction="top"
    bg-color="#2175d6" 
    label-color="#fff"
    active-border="false">
    <div slot="content"><label for="">Mouse over</label></div>
    <div slot="tooltip-text">
      Eu ultrices vitae eu augue. Purus faucibus ornarsad suspendisse sed nisi vitae eu augue. Purus.
    </div>
  </wiz-tooltip>
</wiz-code-demo>