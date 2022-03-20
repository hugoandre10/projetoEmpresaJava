import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCargoSupervisorComponent } from './lista-cargo-supervisor.component';

describe('ListaCargoSupervisorComponent', () => {
  let component: ListaCargoSupervisorComponent;
  let fixture: ComponentFixture<ListaCargoSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCargoSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCargoSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
