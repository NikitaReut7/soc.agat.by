import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lk8Component } from './lk8.component';

describe('Lk8Component', () => {
  let component: Lk8Component;
  let fixture: ComponentFixture<Lk8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lk8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lk8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
