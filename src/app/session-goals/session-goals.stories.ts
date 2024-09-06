import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { SessionGoalsComponent } from './session-goals.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Session Clinical UI/SessionGoals',
  component: SessionGoalsComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, SessionGoalsComponent], // Import the standalone component
    }),
  ],
} as Meta;

const Template: StoryFn<SessionGoalsComponent> = (args: SessionGoalsComponent) => ({
  component: SessionGoalsComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};