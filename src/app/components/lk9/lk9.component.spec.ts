import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lk9Component } from './lk9.component';

describe('Lk9Component', () => {
  let component: Lk9Component;
  let fixture: ComponentFixture<Lk9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lk9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lk9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
