import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-calendar',
  templateUrl: './appointment-calendar.component.html',
  styleUrls: ['./appointment-calendar.component.scss']
})
export class AppointmentCalendarComponent implements OnInit {
  @Input() appointments_calendar: {
    date: string,
    time: string,
    doctor: string,
    location: string,
    notes: string,
    type: string,
    status: string
  }[] = [];
  
  currentMonth: Date = new Date();
  selectedAppointments: { date: string, time: string, doctor: string, type: string, status: string }[] = [];

  ngOnInit() {
    this.focusOnMostRecentAppointment();
  }

  focusOnMostRecentAppointment() {
    const sortedAppointments = this.appointments_calendar
      .map(appointment => new Date(appointment.date))
      .sort((a, b) => b.getTime() - a.getTime());

    if (sortedAppointments.length > 0) {
      const mostRecentDate = sortedAppointments[0];
      this.currentMonth = new Date(mostRecentDate.getFullYear(), mostRecentDate.getMonth(), 1);
      this.selectedAppointments = this.appointments_calendar.filter(appointment => new Date(appointment.date).toDateString() === mostRecentDate.toDateString());
    }
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

  isAppointmentDay(date: Date): boolean {
    return this.appointments_calendar.some(appointment => new Date(appointment.date).toDateString() === date.toDateString());
  }

  selectDate(date: Date) {
    this.selectedAppointments = this.appointments_calendar.filter(appointment => new Date(appointment.date).toDateString() === date.toDateString());
  }

  changeMonth(event: Event) {
    const target = event.target as HTMLSelectElement;
    const [year, month] = target.value.split('-').map(Number);
    this.currentMonth = new Date(year, month - 1, 1);
  }

  goToAppointment(direction: 'previous' | 'next') {
    const sortedAppointments = this.appointments_calendar
      .map(appointment => new Date(appointment.date))
      .sort((a, b) => a.getTime() - b.getTime());

    const currentDate = this.selectedAppointments.length > 0 ? new Date(this.selectedAppointments[0].date) : this.currentMonth;
    let targetDate: Date | undefined;

    if (direction === 'previous') {
      targetDate = sortedAppointments.reverse().find(date => date < currentDate);
    } else {
      targetDate = sortedAppointments.find(date => date > currentDate);
    }

    if (targetDate) {
      this.currentMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 1);
      this.selectedAppointments = this.appointments_calendar.filter(appointment => new Date(appointment.date).toDateString() === targetDate.toDateString());
    }
  }

  isPreviousDisabled(): boolean {
    if (this.selectedAppointments.length === 0) return true;
    const sortedAppointments = this.appointments_calendar
      .map(appointment => new Date(appointment.date))
      .sort((a, b) => a.getTime() - b.getTime());
    const currentDate = new Date(this.selectedAppointments[0].date);
    return !sortedAppointments.some(date => date < currentDate);
  }

  isNextDisabled(): boolean {
    if (this.selectedAppointments.length === 0) return true;
    const sortedAppointments = this.appointments_calendar
      .map(appointment => new Date(appointment.date))
      .sort((a, b) => a.getTime() - b.getTime());
    const currentDate = new Date(this.selectedAppointments[0].date);
    return !sortedAppointments.some(date => date > currentDate);
  }
}