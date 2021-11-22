import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';
import { NgSyzButtonGridModule } from 'projects/ng-syz/src/public-api';
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
        SharedTestingModule,
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
