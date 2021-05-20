import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSyzPersonInfoComponent } from './person-info.component';

describe('NgSyzPersonInfoComponent', () => {
  let component: NgSyzPersonInfoComponent;
  let fixture: ComponentFixture<NgSyzPersonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSyzPersonInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzPersonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
