import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { AppointmentCalendarComponent } from './appointment-calendar.component';
import { AppointmentCardComponent } from '../appointment-card/appointment-card.component';
import { AppointmentSearchComponent } from '../appointment-search/appointment-search.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

export default {
  title: 'Appointment UI/AppointmentCalendar',
  component: AppointmentCalendarComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppointmentCalendarComponent, AppointmentCardComponent, AppointmentSearchComponent],
      imports: [CommonModule, FormsModule], // Add FormsModule to imports array
    }),
  ],
} as Meta;

const Template: StoryFn<AppointmentCalendarComponent> = (args: AppointmentCalendarComponent) => ({
  component: AppointmentCalendarComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  appointments_calendar: [
    { date: '2023-05-01', time: '10:00 AM', doctor: 'Dr. Jane Smith', location: '123 Health St, Wellness City', notes: 'Follow-up appointment for anxiety treatment.', type: 'Therapy', status: 'Scheduled' },
    { date: '2023-05-01', time: '11:00 AM', doctor: 'Dr. John Doe', location: '456 Wellness Ave, Health City', notes: 'Initial consultation for depression.', type: 'Consultation', status: 'Completed' },
    { date: '2023-05-02', time: '09:00 AM', doctor: 'Dr. Emily Johnson', location: '789 Care Blvd, Therapy Town', notes: 'Therapy session for stress management.', type: 'Therapy', status: 'Canceled' },
    { date: '2023-05-15', time: '02:00 PM', doctor: 'Dr. Jane Smith', location: '123 Health St, Wellness City', notes: 'Follow-up appointment for anxiety treatment.', type: 'Therapy', status: 'Scheduled' },
    { date: '2023-05-20', time: '01:00 PM', doctor: 'Dr. John Doe', location: '456 Wellness Ave, Health City', notes: 'Initial consultation for depression.', type: 'Consultation', status: 'Completed' },
    { date: '2023-05-25', time: '03:00 PM', doctor: 'Dr. Emily Johnson', location: '789 Care Blvd, Therapy Town', notes: 'Therapy session for stress management.', type: 'Therapy', status: 'Canceled' },
  ],
};