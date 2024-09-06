import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { SessionChecklistComponent } from './session-checklist.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Session Clinical UI/SessionChecklist',
  component: SessionChecklistComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, SessionChecklistComponent], // Import the standalone component
    }),
  ],
} as Meta;

const Template: StoryFn<SessionChecklistComponent> = (args: SessionChecklistComponent) => ({
  component: SessionChecklistComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};