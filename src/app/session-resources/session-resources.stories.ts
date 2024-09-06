import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { SessionResourcesComponent } from './session-resources.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Session Clinical UI/SessionResources',
  component: SessionResourcesComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, SessionResourcesComponent], // Import the standalone component
    }),
  ],
} as Meta;

const Template: StoryFn<SessionResourcesComponent> = (args: SessionResourcesComponent) => ({
  component: SessionResourcesComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};