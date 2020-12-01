import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNComponent } from './first-n.component';

describe('FirstNComponent', () => {
  let component: FirstNComponent;
  let fixture: ComponentFixture<FirstNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
