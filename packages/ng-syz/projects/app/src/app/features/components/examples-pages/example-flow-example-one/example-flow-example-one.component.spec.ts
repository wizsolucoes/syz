import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFlowExampleOneComponent } from './example-flow-example-one.component';

import { NgSyzExampleFlowModule } from '@wizsolucoes/ng-syz';

describe('ExampleFlowExampleOneComponent', () => {
  let component: ExampleFlowExampleOneComponent;
  let fixture: ComponentFixture<ExampleFlowExampleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSyzExampleFlowModule],
      declarations: [ExampleFlowExampleOneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFlowExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
