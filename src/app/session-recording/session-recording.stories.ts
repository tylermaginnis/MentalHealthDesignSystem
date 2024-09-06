import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { SessionRecordingComponent } from './session-recording.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Session Clinical UI/SessionRecording',
  component: SessionRecordingComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SessionRecordingComponent], // Import the standalone component
    }),
  ],
} as Meta;

const Template: StoryFn<SessionRecordingComponent> = (args: SessionRecordingComponent) => ({
  component: SessionRecordingComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};