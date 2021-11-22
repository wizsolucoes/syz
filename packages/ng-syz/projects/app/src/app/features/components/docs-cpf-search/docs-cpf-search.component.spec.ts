import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgSyzCpfSearchModule } from '@wizsolucoes/ng-syz';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';
import { DocsCpfSearchComponent } from './docs-cpf-search.component';

describe('DocsCpfSearchComponent', () => {
  let component: DocsCpfSearchComponent;
  let fixture: ComponentFixture<DocsCpfSearchComponent>;
  let template: HTMLElement;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {
    mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      imports: [MatSnackBarModule, NgSyzCpfSearchModule, SharedTestingModule],
      declarations: [DocsCpfSearchComponent],
      providers: [{ provide: MatSnackBar, useValue: mockSnackBar }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsCpfSearchComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
