import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSyzLoginWithCardsFlowComponent } from './login-with-cards-flow.component';

describe('LoginComponent', () => {
  let component: NgSyzLoginWithCardsFlowComponent;
  let fixture: ComponentFixture<NgSyzLoginWithCardsFlowComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgSyzLoginWithCardsFlowComponent],
        imports: [ReactiveFormsModule, FormsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzLoginWithCardsFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('loginUser', () => {
    it('should emit buttonClick event with username and password', () => {
      // Given
      const credentials = {
        username: 'example@email.com',
        password: '12345678',
      };

      component.ngOnInit();
      component.loginFormGroup.controls['Username'].setErrors(null);
      component.loginFormGroup.controls['Password'].setErrors(null);

      spyOn(component.buttonClick, 'emit');

      component.loginFormGroup.get('Username').setValue(credentials.username);
      component.loginFormGroup.get('Password').setValue(credentials.password);
      // When
      component.loginUser();
      // Then
      expect(component.buttonClick.emit).toHaveBeenCalledWith(credentials);
    });
  });
});
