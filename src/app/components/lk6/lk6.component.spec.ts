import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lk6Component } from './lk6.component';

describe('Lk6Component', () => {
  let component: Lk6Component;
  let fixture: ComponentFixture<Lk6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lk6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lk6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
