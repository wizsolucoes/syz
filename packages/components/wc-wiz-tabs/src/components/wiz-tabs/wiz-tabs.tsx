import { Component, ComponentInterface, h, Prop, Event, EventEmitter, Listen} from '@stencil/core';

@Component({
  tag: 'wiz-tabs',
  styleUrl: 'wiz-tabs.css',
  shadow: true,
})
export class WizTabs implements ComponentInterface {
  @Prop() vertical: boolean;

  @Event() tabChosen: EventEmitter;

  @Listen('returnEvent')
  returnEventHandler(event: CustomEvent) {
    this.tabChosen.emit(event.detail);
  }

  render() {
    return (
      <div class="wiz-tabs-content">
        <div class="wiz-tabs">
          <ul class={`${this.vertical ? 'vertical' : ''}`}>
            <slot></slot>
          </ul>
        </div>
      </div>
    );
  }

}
