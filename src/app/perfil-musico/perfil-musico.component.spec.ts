import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMusicoComponent } from './perfil-musico.component';

describe('PerfilMusicoComponent', () => {
  let component: PerfilMusicoComponent;
  let fixture: ComponentFixture<PerfilMusicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilMusicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilMusicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
