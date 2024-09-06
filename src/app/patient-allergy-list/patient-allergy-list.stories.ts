import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { PatientAllergyListComponent } from './patient-allergy-list.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Patient UI/PatientAllergyList',
  component: PatientAllergyListComponent,
  decorators: [
    moduleMetadata({
      declarations: [PatientAllergyListComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: StoryFn<PatientAllergyListComponent> = (args: PatientAllergyListComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  allergies: [
    { name: 'Peanuts', reaction: 'Hives', severity: 'High' },
    { name: 'Penicillin', reaction: 'Anaphylaxis', severity: 'Severe' },
    { name: 'Dust', reaction: 'Sneezing', severity: 'Low' }
  ]
};