import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedicationListComponent } from './patient-medication-list.component';

describe('PatientMedicationListComponent', () => {
  let component: PatientMedicationListComponent;
  let fixture: ComponentFixture<PatientMedicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientMedicationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientMedicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
