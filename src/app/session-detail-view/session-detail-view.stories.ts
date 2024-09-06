import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { SessionDetailViewComponent } from './session-detail-view.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SessionChecklistComponent } from '../session-checklist/session-checklist.component';
import { SessionFeedbackFormComponent } from '../session-feedback-form/session-feedback-form.component';
import { SessionGoalsComponent } from '../session-goals/session-goals.component';
import { SessionHistoryComponent } from '../session-history/session-history.component';
import { SessionNotesComponent } from '../session-notes/session-notes.component';
import { SessionProgressTrackerComponent } from '../session-progress-tracker/session-progress-tracker.component';
import { SessionRecordingComponent } from '../session-recording/session-recording.component';
import { SessionResourcesComponent } from '../session-resources/session-resources.component';
import { SessionSummaryComponent } from '../session-summary/session-summary.component';
import { SessionTimerComponent } from '../session-timer/session-timer.component';

export default {
  title: 'Session Clinical UI/SessionDetailView',
  component: SessionDetailViewComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        SessionChecklistComponent,
        SessionFeedbackFormComponent,
        SessionGoalsComponent,
        SessionHistoryComponent,
        SessionNotesComponent,
        SessionProgressTrackerComponent,
        SessionRecordingComponent,
        SessionResourcesComponent,
        SessionSummaryComponent,
        SessionTimerComponent
      ],
    }),
  ],
} as Meta<SessionDetailViewComponent>;

const Template: StoryFn<SessionDetailViewComponent> = (args) => ({
  props: {
    ...args,
    expandedSections: {
      summary: true,
      goals: false,
      history: false,
      notes: false,
      checklist: false,
      progressTracker: false,
      recording: false,
      resources: false,
      feedbackForm: false,
      timer: false,
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  expandedSections: {
    summary: true,
    goals: true,
    history: true,
    notes: true,
    checklist: true,
    progressTracker: true,
    recording: true,
    resources: true,
    feedbackForm: true,
    timer: true,
  },
};