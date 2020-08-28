import { Component, Prop, h, Event, EventEmitter, Listen, State } from '@stencil/core';

@Component({
  tag: 'wiz-radio',
  styleUrl: 'radio-component.css',
  shadow: true
})
export class RadioComponent {
  @Prop() name;
  @Prop() value;
  @Prop() disabled: boolean;
  @Event() returnEvent: EventEmitter;
  @State() isChosenClass: string;

  @Listen('valueChosen', { target: 'parent' })
  valueChosenHandler(event: CustomEvent) {
    this.isChosenClass = event.detail === this.value ? 'is-checked' : ''
  }

  toggle() {
    this.returnEvent.emit(this.value);
  }

  render() {

    return (
      <div class={`wiz-radio ${this.disabled ? 'disabled' : ''}`} >
        <label class="container-radio">
          <input onClick={() => this.toggle()} disabled={this.disabled} type="radio" name={this.name} />
          <span class={`checkmark-radio ${this.isChosenClass}`}></span>
          <span class={`checkmark-radio-select ${this.isChosenClass}`}></span>
        </label>
      </div >)
  }
}
