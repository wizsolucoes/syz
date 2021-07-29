import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgSyzCpfSearchComponent } from './cpf-search.component';

describe('NgSyzCpfSearchComponent', () => {
  let component: NgSyzCpfSearchComponent;
  let fixture: ComponentFixture<NgSyzCpfSearchComponent>;
  let template: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgSyzCpfSearchComponent],
        imports: [
          FormsModule,
          ReactiveFormsModule,
          BrowserAnimationsModule,
          MatRadioModule,
          MatButtonModule,
          MatInputModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzCpfSearchComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display message', () => {
    // Given
    const message = 'Lorem ipsum';
    component.message = message;

    // When
    fixture.detectChanges();

    // Then
    const messsageElement = template.querySelector('[data-test="message"]');
    expect(messsageElement.innerHTML).toEqual(message);
  });

  describe('searchCustomer', () => {
    it('should emit buttonClick event with input', () => {
      // Given
      const cpf = '12345678901';

      spyOn(component.buttonClick, 'emit');

      // When
      component.ngOnInit();
      component.searchFormGroup.get('cpfCnpj').setValue(cpf);
      component.searchCustomer();

      // Then
      expect(component.buttonClick.emit).toHaveBeenCalledWith(cpf);
    });
    it('should not emit buttonClick event if cpfCnpj is empty', () => {
      // Given
      const cpf = '';

      spyOn(component.buttonClick, 'emit');

      // When
      component.ngOnInit();
      component.searchFormGroup.get('cpfCnpj').setValue(cpf);
      component.searchCustomer();

      // Then
      expect(component.buttonClick.emit).not.toHaveBeenCalled();
    });
  });
});
