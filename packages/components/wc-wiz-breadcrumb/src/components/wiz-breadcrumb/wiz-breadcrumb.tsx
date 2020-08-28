import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import { IBreadcrumbModel } from './breadcrumb-model';

@Component({
  tag: 'wiz-breadcrumb',
  styleUrl: 'wiz-breadcrumb.css',
  shadow: true,
})
export class WizBreadcrumb implements ComponentInterface {


  constructor() {
    this.buildRouterBreadcrumb();
  }


  @Prop() url: string;
  private link: string;
  public obj: Array<IBreadcrumbModel> = [];


  buildRouterBreadcrumb() {
    this.obj = [];
    if (!this.url) {
      this.url = window.location.href;
    }

    const pathname = new URL(this.url).pathname;
    const arrayUrl = pathname.split('/');

    for (let index = 0; index < arrayUrl.length; index++) {

      // console.log(arrayUrl[index]);

      if (arrayUrl[index]) {
        const router = new IBreadcrumbModel();
        router.name = arrayUrl[index];
        this.link += '/' + arrayUrl[index];
        router.url = this.link.replace('undefined', '');
        this.obj.push(router);
      }
    }

    console.log(this.obj);
  }


  render() {

    return (
      <ul>
        {this.obj.map((item, index) =>
          <a href={item.url}>
            <li class="item">
              <label class={{ 'active': this.obj.length == index + 1 }}>{item.name}</label>
              {
                this.obj.length > 0 && !(index - 1 == this.obj.length)
                  ? <svg class="arrow" xmlns="http://www.w3.org/2000/svg"
                    width="8" height="14" viewBox="0 0 8 14">
                    <g transform="rotate(-90 4 7)">
                      <path fill="#9ba5ae"
                        d="M9.914 3.195a.616.616 0 0 1 .9 0 .69.69 0 0 1 0 .943L4.45 10.805a.616.616 0 0 1-.9 0l-6.364-6.667a.69.69 0 0 1 0-.943.616.616 0 0 1 .9 0L4 9.391z" />
                    </g>
                  </svg>
                  : <span></span>
              }

            </li>
          </a>
        )}
      </ul>
    );
  }

}
