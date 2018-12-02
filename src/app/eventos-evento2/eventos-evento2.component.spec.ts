import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosEvento2Component } from './eventos-evento2.component';

describe('EventosEvento2Component', () => {
  let component: EventosEvento2Component;
  let fixture: ComponentFixture<EventosEvento2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosEvento2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosEvento2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
