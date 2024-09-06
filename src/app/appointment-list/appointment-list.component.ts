import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  @Input() appointments: {
    date: string,
    time: string,
    doctor: string,
    location: string,
    notes: string,
    type: string,
    status: string
  }[] = [];

  filteredAppointments: {
    date: string,
    time: string,
    doctor: string,
    location: string,
    notes: string,
    type: string,
    status: string
  }[] = [];

  searchTerm: string = '';
  selectedStatus: string = '';

  ngOnInit() {
    this.filteredAppointments = this.appointments;
  }

  filterAppointments() {
    this.filteredAppointments = this.appointments.filter(appointment => {
      return (
        (this.searchTerm === '' || appointment.doctor.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
        (this.selectedStatus === '' || appointment.status === this.selectedStatus)
      );
    });
  }
}