import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSyzLoginWithCarouselFlowComponent } from './login-with-carousel-flow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('NgSyzLoginWithCarouselFlowComponent', () => {
  let component: NgSyzLoginWithCarouselFlowComponent;
  let fixture: ComponentFixture<NgSyzLoginWithCarouselFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        SwiperModule,
        MatIconModule,
        MatFormFieldModule,
      ],
      declarations: [NgSyzLoginWithCarouselFlowComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzLoginWithCarouselFlowComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('loginUser', () => {
    it('should emit loginOnClick event with username and password', () => {
      // Given
      const credentials = {
        username: 'example@email.com',
        password: '12345678',
      };

      const usernameKey = 'username';
      const passwordKey = 'password';

      component.ngOnInit();

      spyOn(component.loginOnClick, 'emit');

      component.formLogin.get(usernameKey).setValue(credentials.username);
      component.formLogin.get(passwordKey).setValue(credentials.password);
      // When
      component.loginUser();
      // Then
      expect(component.loginOnClick.emit).toHaveBeenCalledWith(credentials);
    });
    it('should not emit loginOnClick event when loginForm  is INVALID', () => {
      // Given
      const credentials = {
        username: 'exampleemail.com',
        password: '12345678',
      };

      const usernameKey = 'username';
      const passwordKey = 'password';

      component.ngOnInit();

      spyOn(component.loginOnClick, 'emit');

      component.formLogin.get(usernameKey).setValue(credentials.username);
      component.formLogin.get(passwordKey).setValue(credentials.password);
      // When
      component.loginUser();
      // Then
      expect(component.loginOnClick.emit).not.toHaveBeenCalled();
    });
  });

  describe('showPassword', () => {
    it('should show password when button click', () => {
      // When
      component.showPassword();
      // Then
      expect(component.isTextFieldType).toBe(true);
    });
  });
});
