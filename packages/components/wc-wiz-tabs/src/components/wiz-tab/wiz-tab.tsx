import { Component, Prop, h, Event, EventEmitter, ComponentInterface, State, Listen } from '@stencil/core';
@Component({
  tag: 'wiz-tab',
  styleUrl: 'wiz-tab.css',
  shadow: true,
})
export class WizTab implements ComponentInterface {

  @Prop() type: string;
  @Prop() active: boolean;
  @State() isActiveState: boolean;
  @Event() returnEvent: EventEmitter;
  @Prop() value;

  @Listen('tabChosen', { target: 'parent' })
  tabChosenHandler(event: CustomEvent) {
    this.isActiveState = event.detail === this.value;
  }

  open() {
    this.returnEvent.emit(this.value);
  };

  componentWillLoad() {
    this.isActiveState = this.active;
  }

  render() {
    return (
      <li onClick={() => this.open()} class={`${this.type} ${this.isActiveState ? ' active' : ''}`} >
        <slot></slot>
      </li>

    );
  }

}
