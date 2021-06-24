import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Credentials {
  username: string;
  password: string;
}

export interface Slide {
  img: string;
  soon: boolean;
  title: string;
  subtitle: string;
  alt: string;
}

export interface ProductLogo {
  img: string;
  imgAlt: string;
}

@Component({
  selector: 'ng-syz-login-with-carousel-flow',
  templateUrl: './login-with-carousel-flow.component.html',
  styleUrls: ['./login-with-carousel-flow.component.scss'],
})
export class NgSyzLoginWithCarouselFlowComponent implements OnInit {
  @Input() productLogo: ProductLogo;
  @Input() slides: Slide[];
  @Input() signUpPath: string;
  @Input() forgotPasswordPath: string;

  @Output() loginOnClick: EventEmitter<Credentials> = new EventEmitter();
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

  openModal(id: string) {}

  closeModal(id: string) {
    this.closeModalOnClick.emit();
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
