import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirFuncionariosComponent } from './excluir-funcionarios.component';

describe('ExcluirFuncionariosComponent', () => {
  let component: ExcluirFuncionariosComponent;
  let fixture: ComponentFixture<ExcluirFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirFuncionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
