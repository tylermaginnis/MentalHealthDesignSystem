import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.scss'],
  imports: [FormsModule]
})
export class AppointmentSchedulerComponent {
  appointment = {
    date: '',
    time: '',
    doctor: '',
    location: '',
    notes: '',
    type: '',
    status: 'Scheduled'
  };

  scheduleAppointment() {
    console.log('Scheduling appointment:', this.appointment);
    // Implement scheduling logic here
  }
}