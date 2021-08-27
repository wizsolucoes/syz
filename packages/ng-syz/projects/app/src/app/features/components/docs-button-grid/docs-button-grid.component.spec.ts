import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSyzButtonGridModule } from 'projects/ng-syz/src/public-api';
import { SharedModule } from '../../../shared/shared.module';

import { DocsButtonGridComponent } from './docs-button-grid.component';

describe('DocsButtonGridComponent', () => {
  let component: DocsButtonGridComponent;
  let fixture: ComponentFixture<DocsButtonGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NgSyzButtonGridModule,
        RouterTestingModule,
        SharedModule,
        NoopAnimationsModule,
      ],
      declarations: [DocsButtonGridComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsButtonGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
