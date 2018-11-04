import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMusicoShowsComponent } from './perfil-musico-shows.component';

describe('PerfilMusicoShowsComponent', () => {
  let component: PerfilMusicoShowsComponent;
  let fixture: ComponentFixture<PerfilMusicoShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilMusicoShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilMusicoShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
