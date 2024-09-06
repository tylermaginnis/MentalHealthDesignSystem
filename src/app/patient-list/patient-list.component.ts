import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  @Input() patients: { 
    name: string, 
    age: number, 
    gender: string, 
    contact: string, 
    address: string, 
    conditions: string, 
    treatmentPlan: string, 
    provider: string 
  }[] = [];
  searchTerm: string = '';
  selectedGender: string = '';
  filteredPatients: { 
    name: string, 
    age: number, 
    gender: string, 
    contact: string, 
    address: string, 
    conditions: string, 
    treatmentPlan: string, 
    provider: string 
  }[] = [];

  ngOnInit() {
    this.filteredPatients = this.patients;
  }

  filterPatients() {
    this.filteredPatients = this.patients.filter(patient => {
      return (
        (this.searchTerm === '' || patient.name.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
        (this.selectedGender === '' || patient.gender === this.selectedGender)
      );
    });
  }
}