import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSyzLoginCredentials, NgSyzLoginLogo, NgSyzSlide } from '../models';

@Component({
  selector: 'ng-syz-login-with-carousel-flow',
  templateUrl: './login-with-carousel-flow.component.html',
  styleUrls: ['./login-with-carousel-flow.component.scss'],
})
export class NgSyzLoginWithCarouselFlowComponent implements OnInit {
  @Input() productLogo: NgSyzLoginLogo;
  @Input() slides: NgSyzSlide[];
  @Input() signUpPath: string;
  @Input() forgotPasswordPath: string;

  @Output() loginOnClick: EventEmitter<NgSyzLoginCredentials> =
    new EventEmitter();
  @Output() closeModalOnClick: EventEmitter<any> = new EventEmitter();

  formLogin: FormGroup;
  isTextFieldType: boolean;
  errorMessage: string;
  width: number;
  config: any = {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
  };

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i),
      ]),
      password: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  showPassword() {
    this.isTextFieldType = !this.isTextFieldType;
  }

  loginUser() {
    if (this.formLogin.valid) {
      this.loginOnClick.emit({
        username: this.formLogin.get('username').value,
        password: this.formLogin.get('password').value,
      });
    }
  }

  obterWidth() {
    this.width = window.innerWidth;
    if (this.width > 992) {
      return true;
    } else {
      return false;
    }
  }
}
