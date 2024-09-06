import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { PatientNotesComponent } from './patient-notes.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Patient UI/PatientNotes',
  component: PatientNotesComponent,
  decorators: [
    moduleMetadata({
      declarations: [PatientNotesComponent],
      imports: [CommonModule, FormsModule],
    }),
  ],
} as Meta;

const Template: StoryFn<PatientNotesComponent> = (args: PatientNotesComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
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
  ]
};