import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMusicoAgendaComponent } from './perfil-musico-agenda.component';

describe('PerfilMusicoAgendaComponent', () => {
  let component: PerfilMusicoAgendaComponent;
  let fixture: ComponentFixture<PerfilMusicoAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilMusicoAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilMusicoAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
