import { Component, OnInit } from '@angular/core';
import { ComponentProps } from '../../../shared/models/component-props.interface';

@Component({
  selector: 'app-docs-achievements-progress-bar',
  templateUrl: './docs-achievements-progress-bar.component.html',
  styleUrls: ['./docs-achievements-progress-bar.component.scss']
})
export class DocsAchievementsProgressBarComponent implements OnInit {

  componentCSSVariables: ComponentProps[] = [
    {
      name: `--syz-timeline-size-line`,
      description: 'Tamanho da linha da timeline',
    },
    {
      name: `--syz-timeline-primary-color-text`,
      description: 'Cor primária do texto do conteudo da timeline',
    },
    {
      name: `--syz-timeline-color-simbol`,
      description: 'Cor símbolo do conteudo da timeline',
    },
    {
      name: `--syz-timeline-color-line`,
      description: 'Cor da linha da timeline',
    },
    {
      name: `--syz-timeline-padding-item`,
      description: 'Dimensões do padding',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public toggleButtonLeftIsSelectedEvent(item): void {
    console.log('toggleButtonLeftIsSelectedEvent: ', item);
  }

}
