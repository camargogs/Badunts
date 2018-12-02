import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosCadastro2Component } from './eventos-cadastro2.component';

describe('EventosCadastro2Component', () => {
  let component: EventosCadastro2Component;
  let fixture: ComponentFixture<EventosCadastro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosCadastro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosCadastro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
