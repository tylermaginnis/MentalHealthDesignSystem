import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { AppointmentSearchComponent } from './appointment-search.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

export default {
  title: 'Appointment UI/AppointmentSearch',
  component: AppointmentSearchComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppointmentSearchComponent],
      imports: [CommonModule, FormsModule],
    }),
  ],
} as Meta;

const Template: StoryFn<AppointmentSearchComponent> = (args) => ({
  props: {
    ...args,
    searchTermChange: new EventEmitter<string>(),
    selectedStatusChange: new EventEmitter<string>(),
  },
});

export const Default = Template.bind({});
Default.args = {
  searchTerm: '',
  selectedStatus: '',
};