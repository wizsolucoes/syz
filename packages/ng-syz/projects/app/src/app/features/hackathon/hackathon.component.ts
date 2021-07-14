import { Component } from '@angular/core';

interface SectionLink {
  key: string;
  title: string;
}

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.component.html',
  styleUrls: ['./hackathon.component.scss'],
})
export class HackathonComponent {
  formatKey = 'format';
  pointsKey = 'points';
  chronogramKey = 'chronogram';
  prizesKey = 'prizes';

  sectionLinks: SectionLink[] = [
    {
      key: this.formatKey,
      title: 'FORMATO',
    },
    {
      key: this.pointsKey,
      title: 'PONTUAÇÃO',
    },
    {
      key: this.chronogramKey,
      title: 'CRONOGRAMA',
    },
    {
      key: this.prizesKey,
      title: 'PREMIAÇÃO',
    },
  ];

  selectedLink = this.formatKey;

  scroll(el: HTMLElement): void {
    el.scrollIntoView();
  }
}
