import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSyzPasswordResetCardModule } from 'projects/ng-syz/src/public-api';
import { SharedModule } from '../../../shared/shared.module';

import { DocsSimulationResultComponent } from './docs-password-reset-card.component';

describe('DocsSimulationResultComponent', () => {
  let component: DocsSimulationResultComponent;
  let fixture: ComponentFixture<DocsSimulationResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsSimulationResultComponent],
      imports: [
        CommonModule,
        NgSyzPasswordResetCardModule,
        RouterTestingModule,
        SharedModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsSimulationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
