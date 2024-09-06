import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-session-summary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './session-summary.component.html',
  styleUrls: ['./session-summary.component.scss']
})
export class SessionSummaryComponent {
  sessionDate: string = new Date().toISOString().split('T')[0];
  therapist: string = 'Dr. John Doe'; // This should be dynamically set based on the logged-in user
  summary: string = '';
  goals: string[] = [];
  newGoal: string = '';

  addGoal() {
    if (this.newGoal.trim()) {
      this.goals.push(this.newGoal.trim());
      this.newGoal = '';
    }
  }

  removeGoal(index: number) {
    this.goals.splice(index, 1);
  }
}