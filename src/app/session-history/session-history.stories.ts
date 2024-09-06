import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { SessionHistoryComponent } from './session-history.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Session Clinical UI/SessionHistory',
  component: SessionHistoryComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, SessionHistoryComponent], // Import the standalone component
    }),
  ],
} as Meta;

const Template: StoryFn<SessionHistoryComponent> = (args: SessionHistoryComponent) => ({
  component: SessionHistoryComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};