import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { PatientDetailViewComponent } from './patient-detail-view.component';
import { PatientNotesComponent } from '../patient-notes/patient-notes.component';
import { PatientHistoryTimelineComponent } from '../patient-history-timeline/patient-history-timeline.component';
import { PatientMedicationListComponent } from '../patient-medication-list/patient-medication-list.component';
import { PatientAllergyListComponent } from '../patient-allergy-list/patient-allergy-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
        PatientAllergyListComponent
      ],
      imports: [CommonModule, FormsModule],
    }),
  ],
} as Meta;

const Template: StoryFn<PatientDetailViewComponent> = (args: PatientDetailViewComponent) => ({
  props: args,
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
    { 
      date: '2023-01-01', 
      content: 'Patient is showing signs of improvement.', 
      tags: ['improvement'], 
      attachments: [], 
      author: 'Dr. John Doe' 
    },
    { 
      date: '2023-02-01', 
      content: 'Patient reported feeling anxious.', 
      tags: ['anxiety'], 
      attachments: [], 
      author: 'Dr. John Doe' 
    }
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
  ]
};