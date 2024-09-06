import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAllergyListComponent } from './patient-allergy-list.component';

describe('PatientAllergyListComponent', () => {
  let component: PatientAllergyListComponent;
  let fixture: ComponentFixture<PatientAllergyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientAllergyListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientAllergyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
