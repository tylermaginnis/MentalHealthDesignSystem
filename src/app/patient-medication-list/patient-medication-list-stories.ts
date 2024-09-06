import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { PatientMedicationListComponent } from './patient-medication-list.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Patient UI/PatientMedicationList',
  component: PatientMedicationListComponent,
  decorators: [
    moduleMetadata({
      declarations: [PatientMedicationListComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: StoryFn<PatientMedicationListComponent> = (args: PatientMedicationListComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  medications: [
    { name: 'Sertraline', dosage: '50mg', frequency: 'Once daily', prescribedBy: 'Dr. Smith' },
    { name: 'Alprazolam', dosage: '0.5mg', frequency: 'Twice daily', prescribedBy: 'Dr. Johnson' },
    { name: 'Quetiapine', dosage: '100mg', frequency: 'Once at night', prescribedBy: 'Dr. Lee' }
  ]
};