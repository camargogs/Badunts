import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastro3MusicoComponent } from './cadastro3-musico.component';

describe('Cadastro3MusicoComponent', () => {
  let component: Cadastro3MusicoComponent;
  let fixture: ComponentFixture<Cadastro3MusicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cadastro3MusicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cadastro3MusicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
