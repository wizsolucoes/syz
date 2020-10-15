import { Component, h, State } from '@stencil/core';
import WizLocalStorageManager from '@wizsolucoes/wiz-localstorage-manager';

@Component({
  tag: 'wiz-privacy',
  styleUrl: 'wiz-privacy.scss',
  shadow: true
})

export class WizPrivacy {
  @State() isShow: boolean = true;

  private storage: WizLocalStorageManager;

  constructor() {
    this.storage = new WizLocalStorageManager(
      {
        scope: 'privacy',
        tokenFromUI: '1234578901234567890',
        keySize: 16
      });
  }

  componentWillLoad() {
    let lido = this.storage.getItem("lido");
    if(lido != null) {
      this.isShow = !lido;
    }
  }

  close() {
    this.isShow = false;
    this.storage.setItem("lido", true);
  }



  render() {
    if (this.isShow === true) {
      return (
        <div class="banner">
          <button onClick={() => this.close()}>PROSSEGUIR</button>
          <div class="advise">Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços. Ao utilizar nossos serviços, você concorda com a nossa política de dados. Conheça nosso <a href="https://privacy.wizsolucoes.com.br" target="_blank">Portal de Privacidade</a> e leia mais sobre a nossa nova Política.</div>
        </div>
      )
    } 
    else {
      return
    }
  }
}
