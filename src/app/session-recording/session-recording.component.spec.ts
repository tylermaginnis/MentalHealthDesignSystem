import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionRecordingComponent } from './session-recording.component';

describe('SessionRecordingComponent', () => {
  let component: SessionRecordingComponent;
  let fixture: ComponentFixture<SessionRecordingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionRecordingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
