# Tabs

Tabs é nosso componente guia de organização de conteúdo e navegação por seção, seu objetivo é facilitar a organização e agrupamento de informações semelhantes na mesma página, isso permite que o conteúdo seja visualizado sem precisar sair da página atual. Como boas praticas, ao nomear as tabs use termos curtos e intuitivos.

## Comportamento
O componente tab conta com uma variação de comportamento que proporciona maior usabilidade e adequação a diferentes tipos de produtos e projetos.

### Label

<wiz-code-demo>
  <wiz-tabs vertical="false">
    <wiz-tab type="horizontal" (openEvent)="openEvent($event)" value='a' active="true">Nome da tab</wiz-tab>
    <wiz-tab type="horizontal" (openEvent)="openEvent($event)" value='b'>Nome da tab</wiz-tab>
    <wiz-tab type="horizontal" (openEvent)="openEvent($event)" value='c'>Nome da tab</wiz-tab>
  </wiz-tabs>
</wiz-code-demo>

### Label + Icon

<wiz-code-demo>
  <wiz-tabs vertical="false">
    <wiz-tab type="horizontal" value="a" active="true"><svg _ngcontent-grm-c16="" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-grm-c16="" d="M9.092 6.208c0 .383.311.694.695.694H15.3a.694.694 0 0 0 .694-.778A6.945 6.945 0 0 0 9.877.006a.694.694 0 0 0-.785.687zm6.445 3.52a.904.904 0 0 0-1.771-.36 6.042 6.042 0 1 1-7.132-7.133.904.904 0 0 0-.361-1.77A7.848 7.848 0 0 0 7.843 16a7.868 7.868 0 0 0 7.694-6.271z" fill="#50555a"></path></svg><span style="padding-left: 10px;">Nome da tab</span>
    </wiz-tab>
    <wiz-tab type="horizontal" value="b" active="false"><svg _ngcontent-grm-c16="" height="13" viewBox="0 0 16 13" width="16" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-grm-c16="" d="M14.26 13c-.96 0-1.738-.808-1.738-1.806V1.806C12.522.808 13.3 0 14.26 0 15.22 0 16 .808 16 1.806v9.388c0 .998-.779 1.806-1.74 1.806zM8 13c-.96 0-1.74-.808-1.74-1.806V6.14c0-.997.78-1.806 1.74-1.806s1.74.809 1.74 1.806v5.055C9.74 12.192 8.96 13 8 13zm-8-1.806V8.306C0 7.308.779 6.5 1.74 6.5c.96 0 1.738.808 1.738 1.806v2.888C3.478 12.192 2.7 13 1.74 13 .78 13 0 12.192 0 11.194z" fill="#9ba5ae"></path></svg><span style="padding-left: 10px;">Nome da tab</span>
    </wiz-tab>
    <wiz-tab type="horizontal" value="c" active="false"><svg _ngcontent-grm-c16="" height="17" viewBox="0 0 16 17" width="16" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-grm-c16="" d="M15.337 15.663a.825.825 0 0 1 .14.8.791.791 0 1 1-1.362.248l-1.596-1.894a7.875 7.875 0 0 1-9.661-.46C.106 12.011-.77 8.083.719 4.757 2.208 1.434 5.694-.472 9.24.102c3.546.574 6.28 3.487 6.681 7.118h-3.114a.791.791 0 0 0-.567.236l-.798.812-1.102-2.243a.797.797 0 0 0-.715-.45.797.797 0 0 0-.715.45l-1.597 3.21L5.564 4.48a.8.8 0 0 0-.703-.528.796.796 0 0 0-.758.447l-1.597 3.25a.825.825 0 0 0 .033.827c.159.249.438.39.728.368a.799.799 0 0 0 .668-.471l.798-1.585 1.749 4.754a.8.8 0 0 0 .703.529h.032c.3-.001.575-.174.71-.447l1.685-3.422.886 1.796a.79.79 0 0 0 1.278.211l1.365-1.39H16a8.193 8.193 0 0 1-2.196 4.926z" fill="#9ba5ae"></path></svg><span style="padding-left: 10px;">Nome da tab</span>
    </wiz-tab>
  </wiz-tabs>
</wiz-code-demo>

### Icon

<wiz-code-demo>
  <wiz-tabs vertical="false">
    <wiz-tab type="horizontal" value="a" active="true"><svg _ngcontent-grm-c16="" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-grm-c16="" d="M9.092 6.208c0 .383.311.694.695.694H15.3a.694.694 0 0 0 .694-.778A6.945 6.945 0 0 0 9.877.006a.694.694 0 0 0-.785.687zm6.445 3.52a.904.904 0 0 0-1.771-.36 6.042 6.042 0 1 1-7.132-7.133.904.904 0 0 0-.361-1.77A7.848 7.848 0 0 0 7.843 16a7.868 7.868 0 0 0 7.694-6.271z" fill="#50555a"></path></svg>
    </wiz-tab>
    <wiz-tab type="horizontal" value="b" active="false"><svg _ngcontent-grm-c16="" height="13" viewBox="0 0 16 13" width="16" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-grm-c16="" d="M14.26 13c-.96 0-1.738-.808-1.738-1.806V1.806C12.522.808 13.3 0 14.26 0 15.22 0 16 .808 16 1.806v9.388c0 .998-.779 1.806-1.74 1.806zM8 13c-.96 0-1.74-.808-1.74-1.806V6.14c0-.997.78-1.806 1.74-1.806s1.74.809 1.74 1.806v5.055C9.74 12.192 8.96 13 8 13zm-8-1.806V8.306C0 7.308.779 6.5 1.74 6.5c.96 0 1.738.808 1.738 1.806v2.888C3.478 12.192 2.7 13 1.74 13 .78 13 0 12.192 0 11.194z" fill="#9ba5ae"></path></svg>
    </wiz-tab>
    <wiz-tab type="horizontal" value="c" active="false"><svg _ngcontent-grm-c16="" height="17" viewBox="0 0 16 17" width="16" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-grm-c16="" d="M15.337 15.663a.825.825 0 0 1 .14.8.791.791 0 1 1-1.362.248l-1.596-1.894a7.875 7.875 0 0 1-9.661-.46C.106 12.011-.77 8.083.719 4.757 2.208 1.434 5.694-.472 9.24.102c3.546.574 6.28 3.487 6.681 7.118h-3.114a.791.791 0 0 0-.567.236l-.798.812-1.102-2.243a.797.797 0 0 0-.715-.45.797.797 0 0 0-.715.45l-1.597 3.21L5.564 4.48a.8.8 0 0 0-.703-.528.796.796 0 0 0-.758.447l-1.597 3.25a.825.825 0 0 0 .033.827c.159.249.438.39.728.368a.799.799 0 0 0 .668-.471l.798-1.585 1.749 4.754a.8.8 0 0 0 .703.529h.032c.3-.001.575-.174.71-.447l1.685-3.422.886 1.796a.79.79 0 0 0 1.278.211l1.365-1.39H16a8.193 8.193 0 0 1-2.196 4.926z" fill="#9ba5ae"></path></svg>
    </wiz-tab>
  </wiz-tabs>
</wiz-code-demo>

### Vertical

<wiz-code-demo>
  <wiz-tabs vertical="true">
    <wiz-tab type="vertical" value="a" active="true">Nome da tab
    </wiz-tab>
    <wiz-tab type="vertical" value="b" active="false">Nome da tab
    </wiz-tab>
    <wiz-tab type="vertical" value="c" active="false">Nome da tab
    </wiz-tab>
  </wiz-tabs>
</wiz-code-demo>

