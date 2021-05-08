import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktraceComponent } from './backtrace.component';

describe('BacktraceComponent', () => {
  let component: BacktraceComponent;
  let fixture: ComponentFixture<BacktraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacktraceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacktraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
