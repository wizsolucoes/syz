import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSyzRedefinicaoSenhaModule } from 'projects/ng-syz/src/public-api';
import { SharedModule } from '../../../shared/shared.module';

import { DocsRedefinicaoSenhaComponent } from './docs-redefinicao-senha.component';

describe('DocsRedefinicaoSenhaComponent', () => {
  let component: DocsRedefinicaoSenhaComponent;
  let fixture: ComponentFixture<DocsRedefinicaoSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsRedefinicaoSenhaComponent],
      imports: [
        CommonModule,
        NgSyzRedefinicaoSenhaModule,
        RouterTestingModule,
        SharedModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsRedefinicaoSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
