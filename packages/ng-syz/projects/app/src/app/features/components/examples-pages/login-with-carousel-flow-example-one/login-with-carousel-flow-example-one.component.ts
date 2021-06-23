import { Component } from '@angular/core';

@Component({
  selector: 'app-login-with-carousel-flow-example-one',
  templateUrl: './login-with-carousel-flow-example-one.component.html',
  styleUrls: ['./login-with-carousel-flow-example-one.component.scss'],
})
export class LoginWithCarouselFlowExampleOneComponent {
  exampleProductLogo = {
    img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1624468276/productLogo_qce0hd.png',
    imgAlt: 'product logo',
  };

  exampleSlides = [
    {
      img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1624386129/productImg_upobfg.png',
      soon: false,
      title: 'Título 1 aqui',
      subtitle:
        'Seu texto de chamada slide 1 aqui. Seu texto de chamada slide 1 aqui. Seu texto de chamada slide 1 aqui.',
      alt: 'texto descritivo para imagem do slide',
    },
    {
      img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1624386129/productImg_upobfg.png',
      soon: false,
      title: 'Título 2 aqui',
      subtitle:
        'Seu texto de chamada slide 2 aqui. Seu texto de chamada slide 2 aqui. Seu texto de chamada slide 2 aqui.',
      alt: 'texto descritivo para imagem do slide',
    },
    {
      img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1624386129/productImg_upobfg.png',
      soon: false,
      title: 'Título 3 aqui',
      subtitle:
        'Seu texto de chamada slide 3 aqui. Seu texto de chamada slide 3 aqui. Seu texto de chamada slide 3 aqui.',
      alt: 'texto descritivo para imagem do slide',
    },
  ];
}
