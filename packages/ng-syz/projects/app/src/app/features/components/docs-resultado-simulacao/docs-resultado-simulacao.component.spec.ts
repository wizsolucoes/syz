import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsResultadoSimulacaoComponent } from './docs-resultado-simulacao.component';

describe('DocsResultadoSimulacaoComponent', () => {
  let component: DocsResultadoSimulacaoComponent;
  let fixture: ComponentFixture<DocsResultadoSimulacaoComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsResultadoSimulacaoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsResultadoSimulacaoComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid description', () => {
    const description = component.description;
    expect(description).not.toBeNull();
  });

  it('should have valid example values when initialize component', () => {
    component.htmlExampleCode1 = '';
    component.tsExampleCode1 = '';
    component.cssExampleCode1 = '';

    const htmlExampleCode1 = component.htmlExampleCode1;
    const tsExampleCode1 = component.tsExampleCode1;
    const cssExampleCode1 = component.cssExampleCode1;

    expect(htmlExampleCode1).toEqual('');
    expect(tsExampleCode1).toEqual('');
    expect(cssExampleCode1).toEqual('');

    component.initExampleVariables();

    expect(htmlExampleCode1).not.toBeNull();
    expect(tsExampleCode1).not.toBeNull();
    expect(cssExampleCode1).not.toBeNull();
  });

  it('shoud call enviarCardSelecionado when card is clicked', () => {});
});
