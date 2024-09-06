import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { SessionSummaryComponent } from './session-summary.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Session Clinical UI/SessionSummary',
  component: SessionSummaryComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, SessionSummaryComponent], // Import the standalone component
    }),
  ],
} as Meta;

const Template: StoryFn<SessionSummaryComponent> = (args: SessionSummaryComponent) => ({
  component: SessionSummaryComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};