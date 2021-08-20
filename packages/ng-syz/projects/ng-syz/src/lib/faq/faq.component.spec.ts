import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSyzFaqComponent } from './faq.component';

describe('NgSyzFaqComponent', () => {
  let component: NgSyzFaqComponent;
  let fixture: ComponentFixture<NgSyzFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSyzFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
