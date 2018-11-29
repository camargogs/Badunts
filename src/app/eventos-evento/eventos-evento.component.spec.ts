import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosEventoComponent } from './eventos-evento.component';

describe('EventosEventoComponent', () => {
  let component: EventosEventoComponent;
  let fixture: ComponentFixture<EventosEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
