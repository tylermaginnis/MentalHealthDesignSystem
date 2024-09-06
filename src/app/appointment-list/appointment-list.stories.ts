import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { AppointmentListComponent } from './appointment-list.component';
import { AppointmentCardComponent } from '../appointment-card/appointment-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Appointment UI/AppointmentList',
  component: AppointmentListComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppointmentListComponent, AppointmentCardComponent],
      imports: [CommonModule, FormsModule],
    }),
  ],
} as Meta;

const Template: StoryFn<AppointmentListComponent> = (args: AppointmentListComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  appointments: [
    {
      date: '2023-05-01',
      time: '10:00 AM',
      doctor: 'Dr. Jane Smith',
      location: '123 Health St, Wellness City',
      notes: 'Follow-up appointment for anxiety treatment.',
      type: 'Therapy',
      status: 'Scheduled'
    },
    {
      date: '2023-05-02',
      time: '11:00 AM',
      doctor: 'Dr. John Doe',
      location: '456 Wellness Ave, Health City',
      notes: 'Initial consultation for depression.',
      type: 'Consultation',
      status: 'Completed'
    },
    {
      date: '2023-05-03',
      time: '09:00 AM',
      doctor: 'Dr. Emily Johnson',
      location: '789 Care Blvd, Therapy Town',
      notes: 'Therapy session for stress management.',
      type: 'Therapy',
      status: 'Canceled'
    }
  ],
};