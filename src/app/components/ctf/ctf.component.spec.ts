import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtfComponent } from './ctf.component';

describe('CtfComponent', () => {
  let component: CtfComponent;
  let fixture: ComponentFixture<CtfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
