import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCargoFuncionarioComponent } from './lista-cargo-funcionario.component';

describe('ListaCargoFuncionarioComponent', () => {
  let component: ListaCargoFuncionarioComponent;
  let fixture: ComponentFixture<ListaCargoFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCargoFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCargoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
