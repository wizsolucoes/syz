import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-achievements-progress-bar',
  templateUrl: './docs-achievements-progress-bar.component.html',
  styleUrls: ['./docs-achievements-progress-bar.component.scss']
})
export class DocsAchievementsProgressBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public toggleButtonLeftIsSelectedEvent(item): void {
    console.log('toggleButtonLeftIsSelectedEvent: ', item);
  }

}
