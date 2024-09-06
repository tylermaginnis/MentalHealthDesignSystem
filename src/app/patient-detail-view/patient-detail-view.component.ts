import { Component, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-patient-detail-view',
  templateUrl: './patient-detail-view.component.html',
  styleUrls: ['./patient-detail-view.component.scss']
})
export class PatientDetailViewComponent {
  @Input() patient: {
    name: string,
    age: number,
    gender: string,
    contact: string,
    address: string,
    conditions: string,
    treatmentPlan: string,
    provider: string
  } = {
    name: '',
    age: 0,
    gender: '',
    contact: '',
    address: '',
    conditions: '',
    treatmentPlan: '',
    provider: ''
  };

  @Input() notes: { date: string, content: string, tags: string[], attachments: string[], author: string }[] = [];
  @Input() history: { date: string, event: string, details: string }[] = [];
  @Input() medications: { name: string, dosage: string, frequency: string, prescribedBy: string }[] = [];
  @Input() allergies: { name: string, reaction: string, severity: string }[] = [];
  @Input() appointments_list: {
    date: string,
    time: string,
    doctor: string,
    location: string,
    notes: string,
    type: string,
    status: string
  }[] = [];
  @Input() appointments_calendar: {
    date: string,
    time: string,
    doctor: string,
    location: string,
    notes: string,
    type: string,
    status: string
  }[] = [];
  expandedSections: { [key: string]: boolean } = {
    medications: false,
    allergies: false,
    appointments: false
  };

  viewMode: 'list' | 'calendar' = 'list';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggleSection(section: string) {
    this.expandedSections[section] = !this.expandedSections[section];
    setTimeout(() => {
      const content = this.el.nativeElement.querySelector(`.tab-content.${section}`);
      if (this.expandedSections[section]) {
        this.renderer.setStyle(content, 'max-height', `${content.scrollHeight}px`);
      } else {
        this.renderer.setStyle(content, 'max-height', '0');
      }
    }, 0);
  }


  isSectionExpanded(section: string): boolean {
    return this.expandedSections[section];
  }

  switchViewMode(mode: 'list' | 'calendar') {
    this.viewMode = mode;
  }

  // New property to manage the view state
  isCalendarView: boolean = false;

  // Method to toggle the view
  toggleAppointmentView() {
    this.isCalendarView = !this.isCalendarView;
  }

  // New properties and methods for the modal
  isSchedulerModalOpen: boolean = false;

  openSchedulerModal() {
    this.isSchedulerModalOpen = true;
  }

  closeSchedulerModal() {
    this.isSchedulerModalOpen = false;
  }
}