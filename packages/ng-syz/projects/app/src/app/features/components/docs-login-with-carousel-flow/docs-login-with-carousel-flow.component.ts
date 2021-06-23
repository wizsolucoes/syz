import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-login-with-carousel-flow',
  templateUrl: './docs-login-with-carousel-flow.component.html',
  styleUrls: ['./docs-login-with-carousel-flow.component.scss'],
})
export class DocsLoginWithCarouselFlowComponent {
  htmlExampleCode = `
  <ng-syz-login-with-carousel-flow></ng-syz-login-with-carousel-flow>
  `;

  cssExample1Code = `
  ng-syz-login-with-carousel-flow {
    --syz-login-with-carousel-content-login-background-color: #D7DBDE;
    --syz-login-with-carousel-slide-background-color: #FF9100 ;
    --syz-login-with-carousel-flow-button-color: gray;
    --syz-login-with-carousel-flow-button-color-dark: gray;
  }
  `;
}
