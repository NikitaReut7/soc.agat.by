import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lk5Component } from './lk5.component';

describe('Lk5Component', () => {
  let component: Lk5Component;
  let fixture: ComponentFixture<Lk5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lk5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lk5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
