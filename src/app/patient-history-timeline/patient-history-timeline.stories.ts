import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { PatientHistoryTimelineComponent } from './patient-history-timeline.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Patient Clinical UI/PatientHistoryTimeline',
  component: PatientHistoryTimelineComponent,
  decorators: [
    moduleMetadata({
      declarations: [PatientHistoryTimelineComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: StoryFn<PatientHistoryTimelineComponent> = (args: PatientHistoryTimelineComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  history: [
    { date: '2023-01-01', event: 'Initial Consultation', details: 'Patient was diagnosed with depression.' },
    { date: '2023-02-01', event: 'Follow-up Visit', details: 'Patient reported feeling better after starting therapy.' },
    { date: '2023-03-01', event: 'Medication Adjustment', details: 'Medication dosage was adjusted to improve effectiveness.' },
    { date: '2023-04-01', event: 'Therapy Session', details: 'Patient attended a cognitive behavioral therapy session.' }
  ]
};