import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxMaskModule } from 'ngx-mask';

import { NgSyzPersonInfoComponent } from './person-info.component';

describe('NgSyzPersonInfoComponent', () => {
  let component: NgSyzPersonInfoComponent;
  let fixture: ComponentFixture<NgSyzPersonInfoComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSyzPersonInfoComponent],
      imports: [NgxMaskModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzPersonInfoComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    component.person = {
      name: 'Lucas Brando',
      cpfCnpj: '05011798100',
      birthdate: '21/01/1995',
      gerder: 'Masculino',
      civilState: 'Casado(a)',
      phone: '6133891473',
      cellphone: '61984523615',
      email: 'oliveira@live.in',
      address: {
        cep: '73320140',
        uf: 'DF',
        city: 'Brasília',
        street: 'Rua Piaúi',
        district: 'Vila Vicentina',
        complement: 'Quadra 03',
        number: '29',
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should display person data', () => {
    it('should diplay user name', () => {
      const nameElement = template.querySelector('[data-test=name]');
      expect(nameElement.innerHTML).toEqual(component.person.name);
    });

    it('should diplay user email', () => {
      const emailElement = template.querySelector('[data-test=email]');
      expect(emailElement.innerHTML).toEqual(component.person.email);
    });
  });
});
