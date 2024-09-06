import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.scss']
})
export class AppointmentCardComponent {
  @Input() appointment: {
    date: string,
    time: string,
    doctor: string,
    location: string,
    notes: string,
    type: string, // Type of appointment (e.g., Therapy, Consultation)
    status: string // Status of the appointment (e.g., Scheduled, Completed, Canceled)
  } = {
    date: '',
    time: '',
    doctor: '',
    location: '',
    notes: '',
    type: '',
    status: ''
  };

  // Method to handle rescheduling
  reschedule() {
    console.log('Reschedule appointment:', this.appointment);
  }

  // Method to handle cancellation
  cancel() {
    console.log('Cancel appointment:', this.appointment);
  }
}