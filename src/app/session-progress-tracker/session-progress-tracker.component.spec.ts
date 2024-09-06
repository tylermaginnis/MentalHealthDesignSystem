import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionProgressTrackerComponent } from './session-progress-tracker.component';

describe('SessionProgressTrackerComponent', () => {
  let component: SessionProgressTrackerComponent;
  let fixture: ComponentFixture<SessionProgressTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionProgressTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionProgressTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
