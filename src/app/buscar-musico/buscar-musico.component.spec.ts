import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMusicoComponent } from './buscar-musico.component';

describe('BuscarMusicoComponent', () => {
  let component: BuscarMusicoComponent;
  let fixture: ComponentFixture<BuscarMusicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarMusicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarMusicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
