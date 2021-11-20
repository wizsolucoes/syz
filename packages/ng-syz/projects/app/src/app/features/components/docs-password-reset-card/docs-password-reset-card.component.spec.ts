import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';
import { NgSyzPasswordResetCardModule } from 'projects/ng-syz/src/public-api';
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
        SharedTestingModule,
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
