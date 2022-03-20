import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoComissaoComponent } from './edicao-comissao.component';

describe('EdicaoComissaoComponent', () => {
  let component: EdicaoComissaoComponent;
  let fixture: ComponentFixture<EdicaoComissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicaoComissaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoComissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
