import { Component, ComponentInterface, Host, h, Listen, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'wiz-radio-group',
  styleUrl: 'radio-group-component.css',
  shadow: true,
})
export class RadioGroupComponent implements ComponentInterface {
  @Event() valueChosen: EventEmitter;

  @Listen('returnEvent')
  returnEventHandler(event: CustomEvent) {
    this.valueChosen.emit(event.detail);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
