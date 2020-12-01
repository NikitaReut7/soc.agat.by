import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feed4Component } from './feed4.component';

describe('Feed4Component', () => {
  let component: Feed4Component;
  let fixture: ComponentFixture<Feed4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feed4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feed4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
