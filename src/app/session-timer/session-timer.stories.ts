import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { SessionTimerComponent } from './session-timer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Session Clinical UI/SessionTimer',
  component: SessionTimerComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, SessionTimerComponent], // Import the standalone component
    }),
  ],
} as Meta;

const Template: StoryFn<SessionTimerComponent> = (args: SessionTimerComponent) => ({
  component: SessionTimerComponent,
  props: {
    ...args,
    pad: (value: number) => value.toString().padStart(2, '0'), // Mock pad method
  },
});

export const Default = Template.bind({});
Default.args = {
  // Add default args if necessary
};