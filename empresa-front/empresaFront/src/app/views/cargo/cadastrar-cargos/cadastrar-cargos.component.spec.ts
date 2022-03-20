import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCargosComponent } from './cadastrar-cargos.component';

describe('CadastrarCargosComponent', () => {
  let component: CadastrarCargosComponent;
  let fixture: ComponentFixture<CadastrarCargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCargosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
