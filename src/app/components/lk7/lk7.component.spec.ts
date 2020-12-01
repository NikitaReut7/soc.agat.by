import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lk7Component } from './lk7.component';

describe('Lk7Component', () => {
  let component: Lk7Component;
  let fixture: ComponentFixture<Lk7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lk7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lk7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
