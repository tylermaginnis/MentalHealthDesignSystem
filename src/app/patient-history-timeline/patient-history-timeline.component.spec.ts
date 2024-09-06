import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHistoryTimelineComponent } from './patient-history-timeline.component';

describe('PatientHistoryTimelineComponent', () => {
  let component: PatientHistoryTimelineComponent;
  let fixture: ComponentFixture<PatientHistoryTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientHistoryTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientHistoryTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
