import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { SessionProgressTrackerComponent } from './session-progress-tracker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Session Clinical UI/SessionProgressTracker',
  component: SessionProgressTrackerComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, SessionProgressTrackerComponent], // Import the standalone component
    }),
  ],
} as Meta;

const Template: StoryFn<SessionProgressTrackerComponent> = (args: SessionProgressTrackerComponent) => ({
  component: SessionProgressTrackerComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};