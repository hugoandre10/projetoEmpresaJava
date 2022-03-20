import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarCargosComponent } from './deletar-cargos.component';

describe('DeletarCargosComponent', () => {
  let component: DeletarCargosComponent;
  let fixture: ComponentFixture<DeletarCargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarCargosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarCargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
