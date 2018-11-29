import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastro4MusicoComponent } from './cadastro4-musico.component';

describe('Cadastro4MusicoComponent', () => {
  let component: Cadastro4MusicoComponent;
  let fixture: ComponentFixture<Cadastro4MusicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cadastro4MusicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cadastro4MusicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
