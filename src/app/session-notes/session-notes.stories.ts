import { moduleMetadata, StoryFn, Meta, Args } from '@storybook/angular';
import { SessionNotesComponent } from './session-notes.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Session Clinical UI/SessionNotes',
  component: SessionNotesComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, SessionNotesComponent],
    }),
  ],
} as Meta<SessionNotesComponent>;

const Template: StoryFn<SessionNotesComponent> = (args: Args) => ({
  component: SessionNotesComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  notes: [
    { date: '2023-01-01', content: 'Patient is showing signs of improvement.', tags: ['improvement'], attachments: [], author: 'Dr. John Doe' },
    { date: '2023-02-01', content: 'Patient reported feeling anxious.', tags: ['anxiety'], attachments: [], author: 'Dr. John Doe' }
  ],
  currentUser: 'Dr. John Doe',
  searchQuery: ''
};