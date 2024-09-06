import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFeedbackFormComponent } from './session-feedback-form.component';

describe('SessionFeedbackFormComponent', () => {
  let component: SessionFeedbackFormComponent;
  let fixture: ComponentFixture<SessionFeedbackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionFeedbackFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
