import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'wiz-copy',
  styleUrl: 'copy-component.css',
  shadow: true
})
export class CopyComponent {


  @Prop() squareColor: string;
  @Prop() square: string;
  @Prop() labelCopied: string;
  @Prop() time: string;
  @Prop() value: string;
  @State() timer: number = Date.now();
  @Prop() copiedAction: boolean;


  copied() {
    this.copiedAction = true;
    this.copyText(this.value);
    setTimeout(() => {
      this.copiedAction = false;
    }, parseInt(this.time));
  }


  copyText(str) {
    function listener(e) {
      e.clipboardData.setData('text/html', str)
      e.clipboardData.setData('text/plain', str)
      e.preventDefault()
    }
    document.addEventListener('copy', listener)
    document.execCommand('copy')
    document.removeEventListener('copy', listener)
  }

  render() {
    return (
      <span onClick={() => this.copied()} class="copy-content">
        {
          this.square == 'true'
            ? <svg class="square" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              viewBox="0 0 16 16">
              <path fill={this.squareColor} d="M0 0h16v16H0z" />
            </svg>
            : <span></span>
        }
        <label class="copy-label">
          {
            this.copiedAction != true
              ? <span>{this.value}</span>
              : <span>{this.labelCopied}</span>
          }
        </label>
      </span >)
  }
}
