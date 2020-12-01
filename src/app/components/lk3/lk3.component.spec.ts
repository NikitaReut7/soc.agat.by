import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lk3Component } from './lk3.component';

describe('Lk3Component', () => {
  let component: Lk3Component;
  let fixture: ComponentFixture<Lk3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lk3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lk3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
