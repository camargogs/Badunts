import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastro4ContratanteComponent } from './cadastro4-contratante.component';

describe('Cadastro4ContratanteComponent', () => {
  let component: Cadastro4ContratanteComponent;
  let fixture: ComponentFixture<Cadastro4ContratanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cadastro4ContratanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cadastro4ContratanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
