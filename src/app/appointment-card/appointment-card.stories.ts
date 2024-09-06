import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { AppointmentCardComponent } from './appointment-card.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Appointment UI/AppointmentCard',
  component: AppointmentCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppointmentCardComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    reschedule: { action: 'reschedule' },
    cancel: { action: 'cancel' },
  },
} as Meta;

const Template: StoryFn<AppointmentCardComponent> = (args: AppointmentCardComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  appointment: {
    date: '2023-05-01',
    time: '10:00 AM',
    doctor: 'Dr. Jane Smith',
    location: '123 Health St, Wellness City',
    notes: 'Follow-up appointment for anxiety treatment.',
    type: 'Therapy',
    status: 'Scheduled'
  },
};