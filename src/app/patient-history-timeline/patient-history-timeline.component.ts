import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-history-timeline',
  templateUrl: './patient-history-timeline.component.html',
  styleUrls: ['./patient-history-timeline.component.scss']
})
export class PatientHistoryTimelineComponent {
  @Input() history: { date: string, event: string, details: string }[] = [];
}