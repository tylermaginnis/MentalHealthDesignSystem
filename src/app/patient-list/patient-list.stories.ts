import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { PatientListComponent } from './patient-list.component';
import { PatientProfileCardComponent } from '../patient-profile-card/patient-profile-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Patient UI/PatientList',
  component: PatientListComponent,
  decorators: [
    moduleMetadata({
      declarations: [PatientListComponent, PatientProfileCardComponent],
      imports: [CommonModule, FormsModule],
    }),
  ],
} as Meta;

const Template: StoryFn<PatientListComponent> = (args: PatientListComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  patients: [
    { 
      name: 'John Doe', 
      age: 30, 
      gender: 'Male', 
      contact: '123-456-7890',
      address: '123 Main St, Anytown, USA',
      conditions: 'Depression', 
      treatmentPlan: 'Therapy, Medication', 
      provider: 'Dr. Smith' 
    },
    { 
      name: 'Jane Smith', 
      age: 25, 
      gender: 'Female', 
      contact: '987-654-3210',
      address: '456 Elm St, Othertown, USA',
      conditions: 'Anxiety', 
      treatmentPlan: 'Therapy', 
      provider: 'Dr. Johnson' 
    },
    { 
      name: 'Alex Johnson', 
      age: 40, 
      gender: 'Other', 
      contact: '555-555-5555',
      address: '789 Oak St, Sometown, USA',
      conditions: 'Bipolar Disorder', 
      treatmentPlan: 'Medication', 
      provider: 'Dr. Lee' 
    },
  ],
};