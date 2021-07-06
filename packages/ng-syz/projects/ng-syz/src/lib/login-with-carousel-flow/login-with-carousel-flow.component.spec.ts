import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSyzLoginWithCarouselFlowComponent } from './login-with-carousel-flow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('NgSyzLoginWithCarouselFlowComponent', () => {
  let component: NgSyzLoginWithCarouselFlowComponent;
  let fixture: ComponentFixture<NgSyzLoginWithCarouselFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
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

      component.ngOnInit();
      component.formLogin.controls['username'].setErrors(null);
      component.formLogin.controls['password'].setErrors(null);

      spyOn(component.loginOnClick, 'emit');

      component.formLogin.get('username').setValue(credentials.username);
      component.formLogin.get('password').setValue(credentials.password);
      // When
      component.loginUser();
      // Then
      expect(component.loginOnClick.emit).toHaveBeenCalledWith(credentials);
    });
  });
});
