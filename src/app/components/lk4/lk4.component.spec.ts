import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lk4Component } from './lk4.component';

describe('Lk4Component', () => {
  let component: Lk4Component;
  let fixture: ComponentFixture<Lk4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lk4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lk4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
