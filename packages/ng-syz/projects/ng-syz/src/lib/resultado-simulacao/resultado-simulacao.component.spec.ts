import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSyzResultadoSimulacaoComponent } from './resultado-simulacao.component';

describe('NgSyzResultadoSimulacaoComponent', () => {
  let component: NgSyzResultadoSimulacaoComponent;
  let fixture: ComponentFixture<NgSyzResultadoSimulacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSyzResultadoSimulacaoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzResultadoSimulacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
