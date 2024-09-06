import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-profile-card',
  templateUrl: './patient-profile-card.component.html',
  styleUrls: ['./patient-profile-card.component.scss']
})
export class PatientProfileCardComponent {
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

  editPatient() {
    // Implement edit functionality
    console.log('Edit patient:', this.patient);
  }

  archivePatient() {
    // Implement archive functionality
    console.log('Archive patient:', this.patient);
  }
}