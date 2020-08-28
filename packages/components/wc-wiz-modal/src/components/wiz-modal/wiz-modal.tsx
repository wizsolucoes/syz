import { Component, ComponentInterface, h, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'wiz-modal',
  styleUrl: 'wiz-modal.css',
  shadow: true,
})
export class WizModal implements ComponentInterface {
  public styleContent;
  public bgColor;

  @Prop() titleModal;
  @Prop() size;

  @Prop() triggerElementId: string;

  @State() isVisible = false;

  @Listen("click", { target: "document" })
  clickdHandler(event) {
    if (event.target.id === this.triggerElementId) {
      this.openModal();
    }
  }

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }

  stylization() {
    if (this.size === 'lg') {
      this.styleContent = {
        'background-color': this.bgColor,
      }
    }
  }

  render() {
    const className = this.isVisible ? "wiz-modal is-visible" : "wiz-modal is-hidden";

    return (
      <div style={this.styleContent} class={className} aria-hidden="true">
        <div class="wiz-modal-dialog  ">
          <div class={`${this.size} dialog`}>
            {
              this.size !== 'lg'
                ? <a onClick={() => this.closeModal()} class="btn-close" aria-hidden="true">×</a>
                : <span></span>
            }
            <div class="wiz-modal-header">
              <h2>{this.titleModal}</h2>
              {
                this.size == 'lg'
                  ? <a onClick={() => this.closeModal()} class="lg-close" aria-hidden="true">×</a>
                  : <span></span>
              }
            </div>
            <div class="wiz-modal-body">
              <slot name="modal-body"></slot>
            </div>
            <hr/>
            <div class="wiz-modal-footer">
              <slot name="modal-footer"></slot>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
