import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'wiz-privacy',
  styleUrl: 'wiz-privacy.scss',
  shadow: true
})

export class WizPrivacy {
  @State() isShow: boolean = true;

  componentWillLoad() {
    let lido = window.localStorage.getItem("privacy-lido");
    if(lido != null) {
      this.isShow = !lido;
    }
  }

  close() {
    this.isShow = false;
    window.localStorage.setItem("privacy-lido", "true");
  }



  render() {
    if (this.isShow === true) {
      return (
        <div class="banner">
          <div class="advise">Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços. Ao utilizar nossos serviços, você concorda com a nossa política de dados. Conheça nosso <a href="https://protecaodedados.wizsolucoes.com.br" target="_blank">Portal de Privacidade</a> e leia mais sobre a nossa nova Política.</div>
          <div>
            <button onClick={() => this.close()}>PROSSEGUIR</button>
          </div>
        </div>
      )
    }
    else {
      return
    }
  }
}
