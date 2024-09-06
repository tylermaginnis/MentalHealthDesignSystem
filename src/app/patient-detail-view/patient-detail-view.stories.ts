import { moduleMetadata, StoryFn, Meta, Args } from '@storybook/angular';
import { PatientDetailViewComponent } from './patient-detail-view.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientNotesComponent } from '../patient-notes/patient-notes.component';
import { PatientHistoryTimelineComponent } from '../patient-history-timeline/patient-history-timeline.component';
import { PatientMedicationListComponent } from '../patient-medication-list/patient-medication-list.component';
import { PatientAllergyListComponent } from '../patient-allergy-list/patient-allergy-list.component';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';
import { AppointmentCardComponent } from '../appointment-card/appointment-card.component';
import { AppointmentCalendarComponent } from '../appointment-calendar/appointment-calendar.component';

export default {
  title: 'Patient UI/PatientDetailView',
  component: PatientDetailViewComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        PatientDetailViewComponent,
        PatientNotesComponent,
        PatientHistoryTimelineComponent,
        PatientMedicationListComponent,
        PatientAllergyListComponent,
        AppointmentListComponent,
        AppointmentCardComponent,
        AppointmentCalendarComponent
      ],
      imports: [CommonModule, FormsModule],
    }),
  ],
} as Meta<PatientDetailViewComponent>;

const Template: StoryFn<PatientDetailViewComponent> = (args: Args) => ({
    component: PatientDetailViewComponent,
    props: {
      ...args,
    },
  });

export const Default = Template.bind({});
Default.args = {
  patient: {
    name: 'John Doe',
    age: 30,
    gender: 'Male',
    contact: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    conditions: 'Depression',
    treatmentPlan: 'Therapy, Medication',
    provider: 'Dr. Smith'
  },
  notes: [
    { date: '2023-01-01', content: 'Patient is showing signs of improvement.', tags: ['improvement'], attachments: [], author: 'Dr. John Doe' },
    { date: '2023-02-01', content: 'Patient reported feeling anxious.', tags: ['anxiety'], attachments: [], author: 'Dr. John Doe' }
  ],
  history: [
    { date: '2023-01-01', event: 'Initial Consultation', details: 'Patient was diagnosed with depression.' },
    { date: '2023-02-01', event: 'Follow-up Visit', details: 'Patient reported feeling better after starting therapy.' },
    { date: '2023-03-01', event: 'Medication Adjustment', details: 'Medication dosage was adjusted to improve effectiveness.' },
    { date: '2023-04-01', event: 'Therapy Session', details: 'Patient attended a cognitive behavioral therapy session.' }
  ],
  medications: [
    { name: 'Sertraline', dosage: '50mg', frequency: 'Once daily', prescribedBy: 'Dr. Smith' },
    { name: 'Alprazolam', dosage: '0.5mg', frequency: 'Twice daily', prescribedBy: 'Dr. Johnson' },
    { name: 'Quetiapine', dosage: '100mg', frequency: 'Once at night', prescribedBy: 'Dr. Lee' }
  ],
  allergies: [
    { name: 'Peanuts', reaction: 'Hives', severity: 'High' },
    { name: 'Penicillin', reaction: 'Anaphylaxis', severity: 'Severe' },
    { name: 'Dust', reaction: 'Sneezing', severity: 'Low' }
  ],
  appointments_list: [
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
      date: '2023-05-01',
      time: '11:00 AM',
      doctor: 'Dr. John Doe',
      location: '456 Wellness Ave, Health City',
      notes: 'Initial consultation for depression.',
      type: 'Consultation',
      status: 'Completed'
    },
    {
      date: '2023-05-02',
      time: '09:00 AM',
      doctor: 'Dr. Emily Johnson',
      location: '789 Care Blvd, Therapy Town',
      notes: 'Therapy session for stress management.',
      type: 'Therapy',
      status: 'Canceled'
    },
    {
      date: '2023-05-15',
      time: '02:00 PM',
      doctor: 'Dr. Jane Smith',
      location: '123 Health St, Wellness City',
      notes: 'Follow-up appointment for anxiety treatment.',
      type: 'Therapy',
      status: 'Scheduled'
    },
    {
      date: '2023-05-20',
      time: '01:00 PM',
      doctor: 'Dr. John Doe',
      location: '456 Wellness Ave, Health City',
      notes: 'Initial consultation for depression.',
      type: 'Consultation',
      status: 'Completed'
    },
    {
      date: '2023-05-25',
      time: '03:00 PM',
      doctor: 'Dr. Emily Johnson',
      location: '789 Care Blvd, Therapy Town',
      notes: 'Therapy session for stress management.',
      type: 'Therapy',
      status: 'Canceled'
    }
  ],
  appointments_calendar: [
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
      date: '2023-05-01',
      time: '11:00 AM',
      doctor: 'Dr. John Doe',
      location: '456 Wellness Ave, Health City',
      notes: 'Initial consultation for depression.',
      type: 'Consultation',
      status: 'Completed'
    },
    {
      date: '2023-05-02',
      time: '09:00 AM',
      doctor: 'Dr. Emily Johnson',
      location: '789 Care Blvd, Therapy Town',
      notes: 'Therapy session for stress management.',
      type: 'Therapy',
      status: 'Canceled'
    },
    {
      date: '2023-05-15',
      time: '02:00 PM',
      doctor: 'Dr. Jane Smith',
      location: '123 Health St, Wellness City',
      notes: 'Follow-up appointment for anxiety treatment.',
      type: 'Therapy',
      status: 'Scheduled'
    },
    {
      date: '2023-05-20',
      time: '01:00 PM',
      doctor: 'Dr. John Doe',
      location: '456 Wellness Ave, Health City',
      notes: 'Initial consultation for depression.',
      type: 'Consultation',
      status: 'Completed'
    },
    {
      date: '2023-05-25',
      time: '03:00 PM',
      doctor: 'Dr. Emily Johnson',
      location: '789 Care Blvd, Therapy Town',
      notes: 'Therapy session for stress management.',
      type: 'Therapy',
      status: 'Canceled'
    }
  ]
};