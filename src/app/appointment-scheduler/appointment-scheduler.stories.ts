import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { AppointmentSchedulerComponent } from './appointment-scheduler.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Appointment UI/AppointmentScheduler',
  component: AppointmentSchedulerComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppointmentSchedulerComponent],
      imports: [CommonModule, FormsModule],
    }),
  ],
} as Meta;

const Template: StoryFn<AppointmentSchedulerComponent> = (args: AppointmentSchedulerComponent) => ({
  component: AppointmentSchedulerComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};