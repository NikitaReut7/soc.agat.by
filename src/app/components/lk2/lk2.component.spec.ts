import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lk2Component } from './lk2.component';

describe('Lk2Component', () => {
  let component: Lk2Component;
  let fixture: ComponentFixture<Lk2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lk2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lk2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
