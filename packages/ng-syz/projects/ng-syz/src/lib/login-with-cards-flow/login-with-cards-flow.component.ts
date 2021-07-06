import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NgSyzLoginCredentials,
  NgSyzLoginLogo,
  NgSyzLoginCard,
} from '../models';

@Component({
  selector: 'ng-syz-login-with-cards-flow',
  templateUrl: './login-with-cards-flow.component.html',
  styleUrls: ['./login-with-cards-flow.component.scss'],
})
export class NgSyzLoginWithCardsFlowComponent implements OnInit {
  @Input() partnerLogo: NgSyzLoginLogo = {
    img: '../../../assets/Banco Inter - Login.svg',
    imgAlt: 'Logo banco',
  };
  @Input() businessUnitLogo: NgSyzLoginLogo = {
    img: '../../../assets/Wiz Corporate-white.svg',
    imgAlt: 'Wiz Corporate Logo',
  };
  @Input() bgLogin: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() cards: NgSyzLoginCard[];
  @Input() signUpPath: string;
  @Input() forgotPasswordPath: string;

  @Output() buttonClick: EventEmitter<NgSyzLoginCredentials> =
    new EventEmitter();

  loginFormGroup: FormGroup;
  isSubmitting = false;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }

  loginUser(): void {
    if (this.loginFormGroup.valid) {
      this.buttonClick.emit({
        username: this.loginFormGroup.get('Username').value,
        password: this.loginFormGroup.get('Password').value,
      });
    }
  }
}
