import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-syz-carousel-cards',
  templateUrl: './carousel-cards.component.html',
  styleUrls: ['./carousel-cards.component.scss'],
})
export class NgSyzCarouselCardsComponent {
  @Input() person: any;
}
