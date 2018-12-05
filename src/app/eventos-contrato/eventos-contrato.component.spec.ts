import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosContratoComponent } from './eventos-contrato.component';

describe('EventosContratoComponent', () => {
  let component: EventosContratoComponent;
  let fixture: ComponentFixture<EventosContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
