import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMusicoAvaliacoesComponent } from './perfil-musico-avaliacoes.component';

describe('PerfilMusicoAvaliacoesComponent', () => {
  let component: PerfilMusicoAvaliacoesComponent;
  let fixture: ComponentFixture<PerfilMusicoAvaliacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilMusicoAvaliacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilMusicoAvaliacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
