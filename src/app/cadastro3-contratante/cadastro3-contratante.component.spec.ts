import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastro3ContratanteComponent } from './cadastro3-contratante.component';

describe('Cadastro3ContratanteComponent', () => {
  let component: Cadastro3ContratanteComponent;
  let fixture: ComponentFixture<Cadastro3ContratanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cadastro3ContratanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cadastro3ContratanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
