import { formatPercent } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgSyzCpfSearchModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';
import { CpfSearchComponent } from './cpf-search.component';

describe('CpfSearchComponent', () => {
  let component: CpfSearchComponent;
  let fixture: ComponentFixture<CpfSearchComponent>;
  let template: HTMLElement;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {
    mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        NgSyzCpfSearchModule,
        SharedModule,
        NoopAnimationsModule,
      ],
      declarations: [CpfSearchComponent],
      providers: [{ provide: MatSnackBar, useValue: mockSnackBar }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfSearchComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xdescribe('Component Demos', () => {
    describe('CpfSearch', () => {
      it('should display CpfSearch', () => {
        expect(template.querySelector('ng-syz-cpf-search')).toBeTruthy();
      });

      describe('onCpfSeachButtonClick', () => {
        it('should open snack bar', () => {
          // Given
          const cpf = '12340';

          // When
          component.onCpfSeachButtonClick(cpf);

          // Then
          expect(mockSnackBar.open).toHaveBeenCalledWith(cpf, 'Fechar');
        });
      });
    });
  });
});
