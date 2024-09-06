import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-calendar',
  templateUrl: './appointment-calendar.component.html',
  styleUrls: ['./appointment-calendar.component.scss']
})
export class AppointmentCalendarComponent implements OnInit {
  currentMonth: Date = new Date();
  selectedAppointments: any[] = [];
  searchTerm: string = '';
  selectedStatus: string = '';
  @Input() appointments_calendar: {
    date: string,
    time: string,
    doctor: string,
    location: string,
    notes: string,
    type: string,
    status: string
  }[] = [];

  ngOnInit() {
    this.setDefaultDate();
    this.filterAppointments();
  }

  setDefaultDate() {
    if (this.appointments_calendar.length > 0) {
      const mostRecentAppointment = this.appointments_calendar.reduce((latest, appointment) => {
        return new Date(appointment.date) > new Date(latest.date) ? appointment : latest;
      });
      this.currentMonth = this.normalizeDate(new Date(mostRecentAppointment.date));
      this.selectDate(this.currentMonth);
    }
  }

  changeMonth(event: any) {
    this.currentMonth = this.normalizeDate(new Date(event.target.value));
    this.filterAppointments();
  }

  getDaysInMonth(date: Date): Date[] {
    const days = [];
    const year = date.getFullYear();
    const month = date.getMonth();
    const numDays = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= numDays; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  }

  isAppointmentDay(day: Date): boolean {
    return this.appointments_calendar.some(appointment => {
      const appointmentDate = this.normalizeDate(new Date(appointment.date));
      console.log(`Comparing ${appointmentDate} with ${day}`);
      return appointmentDate.getFullYear() === day.getFullYear() &&
             appointmentDate.getMonth() === day.getMonth() &&
             appointmentDate.getDate() === day.getDate()-1;
    });
  }

  selectDate(day: Date) {
    console.log(`Selecting appointments for ${day}`);
    this.selectedAppointments = this.appointments_calendar.filter(appointment => {
      const appointmentDate = this.normalizeDate(new Date(appointment.date));
      console.log(`Comparing ${appointmentDate} with ${day}`);
      return appointmentDate.getFullYear() === day.getFullYear() &&
             appointmentDate.getMonth() === day.getMonth() &&
             appointmentDate.getDate() === day.getDate()-1;
    });
    console.log(`Selected appointments:`, this.selectedAppointments);
  }

  goToAppointment(direction: string) {
    const sortedAppointments = this.appointments_calendar.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const currentIndex = sortedAppointments.findIndex(appointment => {
      const appointmentDate = this.normalizeDate(new Date(appointment.date));
      return appointmentDate.getFullYear() === this.currentMonth.getFullYear() &&
             appointmentDate.getMonth() === this.currentMonth.getMonth() &&
             appointmentDate.getDate() === this.currentMonth.getDate();
    });

    if (direction === 'previous' && currentIndex > 0) {
      this.currentMonth = this.normalizeDate(new Date(sortedAppointments[currentIndex - 1].date));
    } else if (direction === 'next' && currentIndex < sortedAppointments.length - 1) {
      this.currentMonth = this.normalizeDate(new Date(sortedAppointments[currentIndex + 1].date));
    }

    this.selectDate(this.currentMonth);
  }



  filterAppointments() {
    const currentYear = this.currentMonth.getFullYear();
    const currentMonth = this.currentMonth.getMonth();

    this.selectedAppointments = this.appointments_calendar.filter(appointment => {
      const appointmentDate = new Date(appointment.date);
      return (
        appointmentDate.getFullYear() === currentYear &&
        appointmentDate.getMonth() === currentMonth &&
        (this.searchTerm === '' || appointment.doctor.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
        (this.selectedStatus === '' || appointment.status === this.selectedStatus)
      );
    });
  }

  normalizeDate(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
}