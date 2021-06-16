import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFlowExampleTwoComponent } from './example-flow-example-two.component';

import { NgSyzExampleFlowModule } from '@wizsolucoes/ng-syz';

describe('ExampleFlowExampleTwoComponent', () => {
  let component: ExampleFlowExampleTwoComponent;
  let fixture: ComponentFixture<ExampleFlowExampleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSyzExampleFlowModule],
      declarations: [ExampleFlowExampleTwoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFlowExampleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
