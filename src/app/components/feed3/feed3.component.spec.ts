import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feed3Component } from './feed3.component';

describe('Feed3Component', () => {
  let component: Feed3Component;
  let fixture: ComponentFixture<Feed3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feed3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feed3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
