import { Component, Prop, h, State } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'wiz-alert',
  styleUrl: 'wiz-alert-component.css',
  shadow: true
})

export class WizAlert {
  @Prop() type: string;
  @Prop() time: number;
  @Prop() btnclose: string;

  @State() timer: number = Date.now();
  @State() isShow: boolean = true;



  componentDidLoad() {
    if (this.time) {
      this.timer = window.setInterval(() => {
        this.isShow = false;
      }, this.time);
    }
  }

  mapColor() {
    const mapColors = {
      error: '#ff3535',
      success: '#00bf85',
      warning: '#ffc136',
      information: '#2175d6',
    }
    return mapColors[this.type];
  }

  close() {
    this.isShow = false;
  }



  render() {
    if (this.isShow === true) {
      return (
        <div class={'wiz-alert-content ' + this.type}>
          {this.isShow}
          <div class="wiz-icon-alert">

            {
              this.type == 'error'
                ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path fill="#ff3535"
                    d="M8.075 6.312a.652.652 0 0 1-.659-.646c0-.356.295-.645.66-.645.364 0 .659.289.659.645a.652.652 0 0 1-.66.646zm.66 4.507a.652.652 0 0 1-.66.644.652.652 0 0 1-.659-.644V7.601c0-.356.295-.644.66-.644.364 0 .659.288.659.644zm7.218-3.417C15.755 3.126 12.025-.184 7.622.008 3.219.2-.19 3.823.008 8.098a7.343 7.343 0 0 0 .957 3.814c.169.308.198.67.08 1L.24 15.344a.31.31 0 0 0 .08.338.333.333 0 0 0 .352.062l2.219-.838c.377-.154.806-.13 1.162.064a8.175 8.175 0 0 0 8.334-.23c2.511-1.594 3.89-4.422 3.565-7.319z" />
                </svg>
                : <div></div>
            }

            {
              this.type == 'success'
                ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" >
                  <path fill="#00bf85"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.258 2.415l3.378-3.597a.942.942 0 0 0-.044-1.221.808.808 0 0 0-1.147-.047L7.15 8.508l-1.09-1.16a.808.808 0 0 0-1.146.047.942.942 0 0 0-.044 1.221l1.69 1.8a.809.809 0 0 0 1.19 0z" />
                </svg >
                : <div></div>
            }

            {
              this.type == 'warning'
                ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path fill="#ffc136"
                    d="M7.579 12.069l1.454 1.326a1.49 1.49 0 0 1-.295 2.417 1.531 1.531 0 0 1-1.764-.208L4.79 13.617a1.418 1.418 0 0 0-1.602-.187 1.42 1.42 0 0 1-1.069.12 1.402 1.402 0 0 1-.842-.662L.265 11.083a2.062 2.062 0 0 1-.183-1.585c.154-.532.515-.98 1.005-1.249l4.63-2.527c.35-.194.639-.483.829-.834L8.998.534c.186-.33.538-.534.92-.534s.734.204.92.534l5.031 8.993c.193.346.171.769-.055 1.094a1.059 1.059 0 0 1-1.013.441l-5.143-.694a2.129 2.129 0 0 0-1.314.243l-.632.347a.69.69 0 0 0-.133 1.111z" />
                </svg>
                : <div></div>
            }

            {
              this.type == 'information'
                ?
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" >
                  <path fill="#2175d6"
                    d="M11.333 4.6H4a.667.667 0 1 1 0-1.333h7.333a.667.667 0 1 1 0 1.333zM8.667 7.277H4a.67.67 0 0 1-.667-.672A.67.67 0 0 1 4 5.933h4.667c.368 0 .666.301.666.672a.67.67 0 0 1-.666.672zM14 0H2a2 2 0 0 0-2 2v7.333a2 2 0 0 0 2 2h.173c.184 0 .334.15.334.334v1.873a.467.467 0 0 0 .793.327l2.147-2.147c.249-.25.587-.392.94-.393H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                </svg >
                : <div></div>
            }

          </div >
          <div class="main-content">
            <slot></slot>
          </div>
          {this.btnclose === "true"
            ? <div onClick={() => this.close()} class="wiz-alert-close" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill={this.mapColor()}
                  d="M10.827 10.827a.667.667 0 0 1-.94 0L8 8.94l-1.887 1.887a.667.667 0 0 1-.94-.94L7.06 8 5.173 6.113a.667.667 0 0 1 .94-.94L8 7.06l1.887-1.887a.667.667 0 0 1 .94.94L8.94 8l1.887 1.887c.258.26.258.68 0 .94zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z" />
              </svg>
            </div >
            : <div></div>
          }
        </div >

      )
    }
    else {
      return
    }
  }
}
