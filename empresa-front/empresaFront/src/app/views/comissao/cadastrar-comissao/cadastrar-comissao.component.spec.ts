import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarComissaoComponent } from './cadastrar-comissao.component';

describe('CadastrarComissaoComponent', () => {
  let component: CadastrarComissaoComponent;
  let fixture: ComponentFixture<CadastrarComissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarComissaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarComissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
