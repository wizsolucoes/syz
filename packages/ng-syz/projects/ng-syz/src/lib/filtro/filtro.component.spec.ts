import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgSyzFiltroComponent } from './filtro.component';

describe('FiltroComponent', () => {
  let component: NgSyzFiltroComponent;
  let fixture: ComponentFixture<NgSyzFiltroComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSyzFiltroComponent],
      imports: [
        MatCheckboxModule,
        CommonModule,
        MatSliderModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzFiltroComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;

    component.filters = [
      {
        field: 'Preço',
        value: {
          min: 0,
          max: 500,
          step: 1,
          value: 50,
        },
      },
      {
        field: 'Tipo de produto',
        value: {
          values: [
            'Perfumes',
            'Bases',
            'Corretivos',
            'Batom',
            'Cílios postiços',
            'Eau de toilette',
            'Eau de parfum',
            'Coxinha',
            'Sonho de noiva',
            'Brigadeiro',
            'Pastel',
            'Macarronada',
            'Diamante',
            'Avião',
            'Tanque',
            'Planeta',
            'Galáxia',
            'Universo',
            'Nada',
            'Man',
            'Mob',
            'King',
            'God',
            'Non believer',
          ],
        },
      },
      {
        field: 'Marca',
        value: { values: ['Nike', 'Adidas', 'Honda'] },
      },
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a div for each filter', () => {
    const filter = template.querySelectorAll('[data-test="filter"]');

    expect(filter.length).toBe(3);
  });

  it('should show a div for each filter', () => {
    const input = template.querySelectorAll(
      '[data-test="input"]'
    )[0] as HTMLInputElement;

    input.value = 'Base';
    const event = {
      target: {
        value: input.value,
      },
    };
    component.filterCheckBox(event, 'Tipo de produto');

    fixture.detectChanges();
    expect(
      component.componentFilters[1].value.values.filter((x) => x.show === true)
        .length
    ).toBe(1);
  });

  it('should emit event with selected fields', () => {
    fixture.detectChanges();

    spyOn(component.handleFormChange, 'emit');

    component.emitFormGroupToParent();

    expect(component.handleFormChange.emit).toHaveBeenCalledWith({Preço: 50});
  });
});
