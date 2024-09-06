import { Component, Input } from '@angular/core';
import { PatientNotesComponent } from '../patient-notes/patient-notes.component';
import { PatientHistoryTimelineComponent } from '../patient-history-timeline/patient-history-timeline.component';
import { PatientMedicationListComponent } from '../patient-medication-list/patient-medication-list.component';
import { PatientAllergyListComponent } from '../patient-allergy-list/patient-allergy-list.component';

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
}