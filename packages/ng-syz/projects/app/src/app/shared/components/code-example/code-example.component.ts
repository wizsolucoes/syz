import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.scss'],
})
export class CodeExampleComponent {
  @Input() htmlCode = `
  Nenhum código html
  `;
  @Input() tsCode = `
  Nenhum código typescript
  `;
  @Input() cssCode = `
  Nenhum código css
  `;
}
