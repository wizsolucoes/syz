import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { NgSyzButtonGridComponent } from './button-grid.component';

describe('NgSyzButtonGridComponent', () => {
  let component: NgSyzButtonGridComponent;
  let fixture: ComponentFixture<NgSyzButtonGridComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSyzButtonGridComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        MatButtonModule,
        MatInputModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzButtonGridComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;

    component.titulo = 'Tipo de Seguro';
    component.subtitulo = 'Subtítulo';
    component.buttons = [
      { text: 'Seguro Cafezal', iconClass: 'fa fa-coffee', route: '#' },
      { text: 'Seguro Pecuário', iconClass: 'fa fa-eercast', route: '#' },
      { text: 'Seguro Canavial', iconClass: 'fa fa-picture-o', route: '#' },
      { text: 'Seguro Floresta', iconClass: 'fa fa-tree', route: '#' },
    ];

    fixture.detectChanges();
  });

  it('should display all button values', () => {
    // Given
    const buttons = template.querySelectorAll('[data-test="button"]');
    const texts = template.querySelectorAll('[data-test="text"]');

    // Then
    expect(buttons.length).toEqual(component.buttons.length);

    expect(texts[0].textContent.trim()).toBe(component.buttons[0].text);
    expect(texts[1].textContent.trim()).toBe(component.buttons[1].text);
    expect(texts[2].textContent.trim()).toBe(component.buttons[2].text);
    expect(texts[3].textContent.trim()).toBe(component.buttons[3].text);
  });

  it('should display titulo', () => {
    // Given
    const titulo = template.querySelectorAll('[data-test="titulo"]')[0]
      .textContent;
    // Then
    expect(titulo).toEqual(component.titulo);
  });

  it('should display subtitulo', () => {
    // Given
    const subtitulo = template.querySelectorAll('[data-test="subtitulo"]')[0]
      .textContent;

    // Then
    expect(subtitulo).toEqual(component.subtitulo);
  });
});
