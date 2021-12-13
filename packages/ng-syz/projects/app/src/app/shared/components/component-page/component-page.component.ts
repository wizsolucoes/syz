import { Component, Input, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { GithubService } from '../../../core/services/github.service';
import { ComponentProps } from '../../models/component-props.interface';
import { Contributor } from '../../models/contributor';

@Component({
  selector: 'app-component-page',
  templateUrl: './component-page.component.html',
  styleUrls: ['./component-page.component.scss'],
})
export class ComponentPageComponent implements OnInit {
  contributors: Contributor[] = [];

  constructor(private gitHubService: GithubService) {}

  @Input() title = '// TODO: Informar `title`';

  @Input() description = '// TODO: Informar `description`';

  @Input() selector = '// TODO: Informar `selector`';

  @Input() importCode = '// TODO: Informar `importCode`';

  @Input() componentProps: ComponentProps[] = [
    { name: 'Nenhuma propriedade', description: '' },
  ];

  @Input() componentCSSVariables: ComponentProps[] = [
    { name: 'Nenhum variável CSS', description: '' },
  ];

  displayedColumns: string[] = ['name', 'description'];

  isNgContentVisible = false;

  ngOnInit(): void {
    this.getContributors();
  }

  getContributors(): void {
    this.gitHubService
      .getContributors(this.selector.replace('ng-syz-', ''))
      .subscribe({
        next: (val: Contributor[]) => {
          this.contributors = val;
        },
      });
  }

  showContent(event: MatTabChangeEvent | { tab: { textLabel: string } }): void {
    this.isNgContentVisible = event.tab.textLabel === 'EXEMPLOS' ? true : false;
  }
}
