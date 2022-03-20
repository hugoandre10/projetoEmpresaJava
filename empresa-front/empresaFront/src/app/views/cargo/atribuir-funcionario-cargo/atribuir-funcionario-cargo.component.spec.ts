import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuirFuncionarioCargoComponent } from './atribuir-funcionario-cargo.component';

describe('AtribuirFuncionarioCargoComponent', () => {
  let component: AtribuirFuncionarioCargoComponent;
  let fixture: ComponentFixture<AtribuirFuncionarioCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtribuirFuncionarioCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtribuirFuncionarioCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
