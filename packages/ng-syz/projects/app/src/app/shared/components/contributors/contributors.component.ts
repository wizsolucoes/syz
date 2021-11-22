import { Component, Input } from '@angular/core';
import { Contributor } from '../../models/contributor';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss'],
})
export class ContributorsComponent {
  @Input() contributors: Contributor[];
}
