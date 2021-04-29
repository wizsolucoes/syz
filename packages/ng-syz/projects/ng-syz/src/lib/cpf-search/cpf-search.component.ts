import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ng-syz-cpf-search',
  templateUrl: './cpf-search.component.html',
  styleUrls: ['./cpf-search.component.scss'],
})
export class NgSyzCpfSearchComponent implements OnInit {
  searchFormGroup: FormGroup;
  @Input() message: string;
  @Output() buttonClick: EventEmitter<string> = new EventEmitter();

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchFormGroup = this.formBuilder.group({
      selectedTypeOfSearch: ['cpf', [Validators.required]],
      cpfCnpj: ['', [Validators.required]],
    });
  }

  searchCustomer(): void {
    if (this.searchFormGroup.value.cpfCpnj !== '') {
      this.buttonClick.emit(this.searchFormGroup.value.cpfCnpj);
    }
  }
}
