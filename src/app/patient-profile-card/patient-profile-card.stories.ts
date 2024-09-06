import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { PatientProfileCardComponent } from './patient-profile-card.component';

export default {
  title: 'Patient Clinical UI/PatientProfileCard',
  component: PatientProfileCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [PatientProfileCardComponent],
    }),
  ],
} as Meta;

const Template: StoryFn<PatientProfileCardComponent> = (args: PatientProfileCardComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  patient: {
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    contact: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    conditions: 'Depression, Anxiety',
    treatmentPlan: 'Cognitive Behavioral Therapy, Medication',
    provider: 'Dr. Jane Smith'
  },
};