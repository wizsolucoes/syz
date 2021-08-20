import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsResultadoSimulacaoComponent } from './docs-resultado-simulacao.component';

describe('DocsResultadoSimulacaoComponent', () => {
  let component: DocsResultadoSimulacaoComponent;
  let fixture: ComponentFixture<DocsResultadoSimulacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsResultadoSimulacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsResultadoSimulacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
