import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComissaoFuncionarioComponent } from './lista-comissao-funcionario.component';

describe('ListaComissaoFuncionarioComponent', () => {
  let component: ListaComissaoFuncionarioComponent;
  let fixture: ComponentFixture<ListaComissaoFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaComissaoFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComissaoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
