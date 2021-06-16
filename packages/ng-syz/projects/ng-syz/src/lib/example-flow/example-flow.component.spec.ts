import { TestBed } from '@angular/core/testing';
import { NgSyzExampleFlowComponent } from './example-flow.component';

describe('NgSyzExampleFlowComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSyzExampleFlowComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NgSyzExampleFlowComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
