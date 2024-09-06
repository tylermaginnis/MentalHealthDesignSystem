import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-allergy-list',
  templateUrl: './patient-allergy-list.component.html',
  styleUrls: ['./patient-allergy-list.component.scss']
})
export class PatientAllergyListComponent {
  @Input() allergies: { name: string, reaction: string, severity: string }[] = [];
}