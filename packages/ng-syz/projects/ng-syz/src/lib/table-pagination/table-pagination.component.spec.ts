import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgSyzTablepaginationComponent } from './table-pagination.component';

describe('NgSyzPerformanceSummaryComponent', () => {
  let component: NgSyzTablepaginationComponent;
  let fixture: ComponentFixture<NgSyzTablepaginationComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgSyzTablepaginationComponent],
        imports: [
          FormsModule,
          ReactiveFormsModule,
          BrowserAnimationsModule,
          MatRadioModule,
          MatButtonModule,
          MatInputModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzTablepaginationComponent);
    component = fixture.componentInstance;
  });



  describe('searchCustomer', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('change page', () => {
      expect(component.changePerPage.emit).toHaveBeenCalledWith('hello');
    });
    it('clickLineEvent emit', () => {
      expect(component.changePerPage.emit).toHaveBeenCalledWith('hello');
    });
    it('navigationPageClick emit', () => {
      expect(component.changePerPage.emit).toHaveBeenCalledWith('hello');
    });
  });
});
