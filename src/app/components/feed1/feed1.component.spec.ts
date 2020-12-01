import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feed1Component } from './feed1.component';

describe('Feed1Component', () => {
  let component: Feed1Component;
  let fixture: ComponentFixture<Feed1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feed1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feed1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
