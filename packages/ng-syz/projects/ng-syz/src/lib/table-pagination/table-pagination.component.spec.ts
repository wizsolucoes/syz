import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgSyzTablepaginationComponent } from './table-pagination.component';

describe('NgSyzTablepaginationComponent', () => {
  let component: NgSyzTablepaginationComponent;
  let fixture: ComponentFixture<NgSyzTablepaginationComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgSyzTablepaginationComponent],
        imports: [
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzTablepaginationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component.hoverEffect).toEqual(false);
  });


});
