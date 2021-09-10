import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgSyzDataTableComponent } from './data-table.component';

describe('NgSyzDataTableComponent', () => {
  let component: NgSyzDataTableComponent;
  let fixture: ComponentFixture<NgSyzDataTableComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgSyzDataTableComponent],
        imports: [],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzDataTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component.hoverEffect).toEqual(false);
  });
});
