import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGeralFuncionarioComponent } from './lista-geral-funcionario.component';

describe('ListaGeralFuncionarioComponent', () => {
  let component: ListaGeralFuncionarioComponent;
  let fixture: ComponentFixture<ListaGeralFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGeralFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGeralFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
