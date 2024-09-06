import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { SessionFeedbackFormComponent } from './session-feedback-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Session Clinical UI/SessionFeedbackForm',
  component: SessionFeedbackFormComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, SessionFeedbackFormComponent], // Import the standalone component
    }),
  ],
} as Meta;

const Template: StoryFn<SessionFeedbackFormComponent> = (args: SessionFeedbackFormComponent) => ({
  component: SessionFeedbackFormComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};