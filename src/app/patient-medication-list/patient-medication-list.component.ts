import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-medication-list',
  templateUrl: './patient-medication-list.component.html',
  styleUrls: ['./patient-medication-list.component.scss']
})
export class PatientMedicationListComponent {
  @Input() medications: { name: string, dosage: string, frequency: string, prescribedBy: string }[] = [];

  refillMedication(medication: any) {
    console.log('Refill medication:', medication);
    // Implement refill functionality
  }

  discontinueMedication(medication: any) {
    console.log('Discontinue medication:', medication);
    // Implement discontinue functionality
  }

  adjustDosage(medication: any) {
    console.log('Adjust dosage for medication:', medication);
    // Implement adjust dosage functionality
  }

  addNoteToMedication(medication: any) {
    console.log('Add note to medication:', medication);
    // Implement add note functionality
  }

  setReminderForMedication(medication: any) {
    console.log('Set reminder for medication:', medication);
    // Implement set reminder functionality
  }
}