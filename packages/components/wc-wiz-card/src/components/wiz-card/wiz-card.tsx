import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'wiz-card',
  styleUrl: 'wiz-card.css',
  shadow: true,
})
export class WizCard {

  @Prop() profileUrl;
  @Prop() name;
  @Prop() occupation;
  @Prop() organization;

  render() {
    return (
      <div>
        <div class="wiz-card-content">
          {
            this.profileUrl
            ? <img class="wiz-card-profile-pic" src={this.profileUrl} alt="Imagem de perfil do usuário" />
            : <div data-letters={this.name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()}></div>
          }

          <label class="wiz-card-name">{this.name}</label>
          <label class="wiz-card-occupation">{this.occupation}</label>
          <div class="wiz-card-organization">
            {this.organization}
          </div>
        </div>
      </div>
    );
  }

}
