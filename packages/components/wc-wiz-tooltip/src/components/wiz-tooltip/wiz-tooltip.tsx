import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'wiz-tooltip',
  styleUrl: 'wiz-tooltip.css',
  shadow: true,
})
export class WizTooltip implements ComponentInterface {

  public class;
  public shadown;
  @Prop() direction;
  @Prop() size;
  @Prop() bgColor;
  @Prop() labelColor;
  @Prop() activeBorder: boolean;
  @Prop() open: boolean;

  public styleContent;


  mouseEnter() {
    this.open = true;
  }

  mouseLeave() {
    this.open = false;
  }

  asyncShadown() {
    setInterval(() => {
      this.loadshadown();
    }, 1000);
  }


  loadshadown() {
    if (this.bgColor == '#fff') {
      this.shadown = '0px 2px 5px -4px #000';
    } else {
      this.shadown = '0px 8px 10px -4px ' + this.bgColor + '';
    }
  }


  stylization() {
    this.styleContent = {
      'box-shadow': this.shadown,
      'background-color': this.bgColor,
      'color': this.labelColor
    }
  }

  render() {
    this.loadshadown();
    this.asyncShadown();
    this.stylization();

    if (this.styleContent)
      return (
        <div class="box-tooltip">
          <div onMouseOver={() => this.mouseEnter()} onMouseLeave={() => this.mouseLeave()}>
            <slot name="content">

            </slot>
          </div>
          {
            this.open
              ? <div class={`tooltip-content tooltip-${this.direction} `} >
                <div style={this.styleContent} class={`tooltip-default tooltip-${this.size} ${this.activeBorder ? ' borderWithe' : ''}`}>
                  <div >
                    <slot name="tooltip-text"></slot>
                  </div>
                </div>
              </div>
              : <div></div>
          }
        </div>
      );
  }

}
