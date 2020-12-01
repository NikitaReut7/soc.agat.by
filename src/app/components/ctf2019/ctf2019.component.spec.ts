import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctf2019Component } from './ctf2019.component';

describe('Ctf2019Component', () => {
  let component: Ctf2019Component;
  let fixture: ComponentFixture<Ctf2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ctf2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctf2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
