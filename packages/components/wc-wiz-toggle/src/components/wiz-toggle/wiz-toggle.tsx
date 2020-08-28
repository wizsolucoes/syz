import { Component, ComponentInterface, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'wiz-toggle',
  styleUrl: 'wiz-toggle-component.css',
  shadow: true,
})
export class WizToggle implements ComponentInterface {
  @Prop() status;
  @Prop() disabled: boolean;
  @Event() returnEvent: EventEmitter;

  toggle(e) {
    this.status = e;
    this.returnEvent.emit(e);
  }

  render() {

    return (
      <label class="wiz-toggle">
        <label>
          <slot />
        </label>
        <input disabled={this.disabled} class="wiz-toggle-checkbox" onChange={(e) => this.toggle(e.target['checked'])} type="checkbox" />
        <div class={`wiz-toggle-switch ${this.disabled ? ' disabled' : ''} ${this.status == true ? ' on' : 'off'}`} ></div>
      </label>
    );
  }

}
