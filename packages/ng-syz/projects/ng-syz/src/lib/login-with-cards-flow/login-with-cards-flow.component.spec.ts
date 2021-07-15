import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSyzLoginWithCardsFlowComponent } from './login-with-cards-flow.component';

describe('NgSyzLoginWithCardsFlowComponent', () => {
  let component: NgSyzLoginWithCardsFlowComponent;
  let fixture: ComponentFixture<NgSyzLoginWithCardsFlowComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgSyzLoginWithCardsFlowComponent],
        imports: [
          CommonModule,
          RouterTestingModule,
          MatButtonModule,
          MatCardModule,
          MatInputModule,
          FormsModule,
          ReactiveFormsModule,
          NoopAnimationsModule,
        ],
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
    it('should emit loginButtonClick event with username and password', () => {
      // Given
      const credentials = {
        username: 'example@email.com',
        password: '12345678',
      };

      component.ngOnInit();
      component.loginFormGroup.controls['Username'].setErrors(null);
      component.loginFormGroup.controls['Password'].setErrors(null);

      spyOn(component.loginButtonClick, 'emit');

      component.loginFormGroup.get('Username').setValue(credentials.username);
      component.loginFormGroup.get('Password').setValue(credentials.password);
      // When
      component.loginUser();
      // Then
      expect(component.loginButtonClick.emit).toHaveBeenCalledWith(credentials);
    });
  });
});
