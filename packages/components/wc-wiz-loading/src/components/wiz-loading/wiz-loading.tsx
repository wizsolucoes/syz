import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'wiz-loading',
  styleUrl: 'wiz-loading.css',
  shadow: true,
})
export class WizLoading implements ComponentInterface {

  @Prop() type: string;
  @Prop() finish: string;
  @Prop() percentage: number;


  render() {
    return (
      <div>
        {
          this.type == 'percentage'
            ? <div class="main-spinner-percent">
              <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
                <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
                <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5">
                </circle>
                <circle class="donut-segment donut-segment-2" cx="20" cy="20" r="15.91549430918954" fill="transparent"
                  stroke-width="3.5" stroke-dasharray={this.percentage + `, ` + (100 - this.percentage)} stroke-dashoffset="25"></circle>
                <g class="donut-text donut-text-1">
                  {/* {{percentage}}, {{(100-percentage)}} */}
                  <text y="50%" transform="translate(0, 2)">
                    <tspan x="50%" text-anchor="middle" class="donut-percent">{this.percentage} %</tspan>
                  </text>
                </g>
              </svg>
            </div>
            : <div></div>
        }

        {
          this.type == 'spinner-continuous'

            ? <div class="spinner-continuous">
              <svg class="spinner" viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="4"></circle>
                <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
              </svg>
            </div>
            : <div></div>
        }

        {
          this.type == 'feedback-sonar'
            ? <div class="feedback-sonar">
              <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
              </div>
            </div>
            : <div></div>
        }



        {
          this.type == 'feedback-bounce'
            ? <div class="feedback-bounce">
              <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
              </div>
            </div>
            : <div></div>
        }

        {
          this.type == 'loading-z'
            ? <div class="loading-z">
              <svg xmlns="http://www.w3.org/2000/svg" class="load-z" width="100%" height="100%" viewBox="0 0 34 67">
                <defs>
                  <clipPath id="imfpa">
                    <path
                      d="M26.52 32.187l-15.282-7.8c-.225-.115-.337-.229-.34-.367-.004-.189.137-.302.34-.423l15.483-9.38c4.002-2.425 6.062-4.53 5.742-8.515C32.171 2.05 29.023 0 23.976 0H.402v9.478h15.917c.341 0 .469.127.47.29 0 .186-.1.275-.322.403L6.124 16.094C2.264 18.309 0 20.339 0 24.486c0 4.146 2.556 6.452 6.124 8.293l16.26 8.392c.254.132.396.266.39.425 0 .137-.1.251-.29.365L.402 54.796v11.65l26.015-15.401c4.485-2.656 6.806-5.236 6.806-9.281 0-4.934-2.598-7.483-6.702-9.577z" />
                  </clipPath>
                </defs>

                <g>
                  <g>
                    <g>
                      <path x="0" y="0" id="wiz-z" fill="#ffd399"
                        d="M26.52 32.187l-15.282-7.8c-.225-.115-.337-.229-.34-.367-.004-.189.137-.302.34-.423l15.483-9.38c4.002-2.425 6.062-4.53 5.742-8.515C32.171 2.05 29.023 0 23.976 0H.402v9.478h15.917c.341 0 .469.127.47.29 0 .186-.1.275-.322.403L6.124 16.094C2.264 18.309 0 20.339 0 24.486c0 4.146 2.556 6.452 6.124 8.293l16.26 8.392c.254.132.396.266.39.425 0 .137-.1.251-.29.365L.402 54.796v11.65l26.015-15.401c4.485-2.656 6.806-5.236 6.806-9.281 0-4.934-2.598-7.483-6.702-9.577z" />
                    </g>

                    <clipPath id="clip">
                      <use xlinkHref='#wiz-z' />
                    </clipPath>

                    <g>
                      <use class="feedback-z" xlinkHref='#wiz-z' stroke="#ff9100" fill="#00D2B8"
                        clip-path="url(#clip)" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            : <div></div>
        }

        {
          this.type == 'circle-load-check'
            ? <div class="circle-load-check">
              <div class="circle-loader">
                {
                  this.finish == 'true'
                    ? <div class="check">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10">
                        <g>
                          <g>
                            <path fill="#ff9100"
                              d="M6.005 9.51l6.598-6.732a1.708 1.708 0 0 0-.086-2.285 1.626 1.626 0 0 0-2.24-.088L4.85 5.942 2.723 3.771a1.626 1.626 0 0 0-2.24.088 1.708 1.708 0 0 0-.086 2.285l3.299 3.367a1.626 1.626 0 0 0 2.326 0z" />
                          </g>
                        </g>
                      </svg>
                    </div>
                    : <div></div>
                }
              </div>
            </div>
            : <div></div>
        }



      </div>
    );
  }

}
