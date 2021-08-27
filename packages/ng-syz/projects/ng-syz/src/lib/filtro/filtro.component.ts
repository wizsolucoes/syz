import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Filter } from '../models';

@Component({
  selector: 'ng-syz-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class NgSyzFiltroComponent {
  @Output() handleFormChange = new EventEmitter(true);
  @Input() filters: Filter[] = [];
  componentFilters: any[] = [];

  form: FormGroup;

  constructor(fb: FormBuilder) {
    const formFields = {};
    this.filters.forEach((filter) => {
      const minString = 'min';
      const valueString = 'value';
      const valuesString = 'values';
      if (
        filter.value[minString] !== null &&
        filter.value[minString] !== undefined
      ) {
        formFields[filter.field] = filter.value[valueString];
        this.componentFilters.push(filter);
      } else {
        const checkBoxFilter = {
          field: filter.field,
          value: { values: [] },
        };
        const values = [];
        filter.value[valuesString].forEach((value) => {
          formFields[`${filter.field}.${value}`] = false;
          values.push({ value, show: true });
        });
        checkBoxFilter.value.values = values;
        this.componentFilters.push(checkBoxFilter);
      }
    });

    this.form = fb.group(formFields);

    // Init the FormGroup in Parent View
    this.emitFormGroupToParent();

    // Every Change the parent is listen to the FromGroup
    this.form.valueChanges.subscribe(() => {
      this.emitFormGroupToParent();
    });
  }

  emitFormGroupToParent(): void {
    const values = {};
    for (const key in this.form.value) {
      if (Object.prototype.hasOwnProperty.call(this.form.value, key)) {
        const value = this.form.value[key];
        if (value || value === 0) {
          values[key] = this.form.value[key];
        }
      }
    }
    this.handleFormChange.emit(values);
  }

  filterCheckBox(event, field): void {
    const value = event.target.value;
    this.componentFilters.forEach((x) => {
      if (x.field === field) {
        x.value.values.forEach((y) => {
          y.show = y.value.toLowerCase().includes(value.toLowerCase());
        });
      }
    });
  }
}
