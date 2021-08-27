import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-syz-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class NgSyzHelloWorldComponent {
  @Input() person: any;
}
