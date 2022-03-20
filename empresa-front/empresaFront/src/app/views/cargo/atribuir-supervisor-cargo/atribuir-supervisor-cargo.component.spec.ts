import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuirSupervisorCargoComponent } from './atribuir-supervisor-cargo.component';

describe('AtribuirSupervisorCargoComponent', () => {
  let component: AtribuirSupervisorCargoComponent;
  let fixture: ComponentFixture<AtribuirSupervisorCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtribuirSupervisorCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtribuirSupervisorCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
