import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'wiz-checkbox',
  styleUrl: 'checkbox-component.css',
  shadow: true
})


export class WizCheckbox {
  @Prop() disabled: boolean;
  @Prop() status;
  @Event() returnEvent: EventEmitter;


  toggle(e) {
    this.status = e;
    this.returnEvent.emit(e.target.checked);

  }

  render() {
    return (
      <label class={`wiz-container-check ${this.disabled ? 'disabled' : ''}`} >
        <input onChange={(e) => this.toggle(e)} disabled={this.disabled} type="checkbox" />
        <span class="wiz-checkmark-check"></span>
      </label >
    );
  }
}
// class="wiz-container-check"
