import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgSyzLoginCredentials } from '@wizsolucoes/ng-syz';

@Component({
  selector: 'app-login-with-carousel-flow-example-two',
  templateUrl: './login-with-carousel-flow-example-two.component.html',
  styleUrls: ['./login-with-carousel-flow-example-two.component.scss'],
})
export class LoginWithCarouselFlowExampleTwoComponent {
  exampleProductLogo = {
    img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1624480827/ConexaoHoriz_Cinza_2x_jf1wnm.png',
    imgAlt: 'product logo',
  };

  exampleSlides = [
    {
      img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1624480904/slide-entrada_sw9ltz.png',
      title: 'Conexão Conseg',
      subtitle:
        'É aqui que você se conecta com a maior operação de venda de seguros em concessionárias',
      alt: `#PraCegoVer Imagem com um homem e uma mulher sorrindo. A mulher é loira e está dentro do carro
    olhando enquanto o homem, também loiro e de barba longa, está encostado no carro com um tablet na mão, mostrando algo para a moça.`,
    },
    {
      img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1624480923/slide-cashback_vxwwcx.png',
      title: 'Cashback',
      subtitle:
        'Compre em mais de 150 lojas parceiras e ganhe parte do dinheiro de volta',
      alt: `#PraCegoVer Conjunto de marcas de empresas presentes no catálogo do cashback, como O
    Boticário, Natura, Quem disse, berenice?, Amazon, Netshoes e CacauShow.`,
    },
    {
      img: 'https://res.cloudinary.com/dexabcezh/image/upload/v1624480934/slide-conta-w_akp9ma.png',
      title: 'Conta W',
      subtitle:
        'Uma conta 100% digital com diversas funcionalidades para facilitar a sua vida',
      alt: `#PraCegoVer Composição de produtos. Na cena temos uma cafeteira, uma caixa de som e celulares.`,
    },
  ];

  constructor(private snackBar: MatSnackBar) {}

  onLoginUserButtonClick(value: NgSyzLoginCredentials): void {
    this.snackBar.open(
      `Email: ${value.username}
       Senha: ${value.password}`,
      'Fechar'
    );
  }
}
