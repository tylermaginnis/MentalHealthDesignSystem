import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-session-progress-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './session-progress-tracker.component.html',
  styleUrls: ['./session-progress-tracker.component.scss']
})
export class SessionProgressTrackerComponent {
  sessions: { date: string, progress: number, notes: string }[] = [];
  newSession: { date: string, progress: number, notes: string } = {
    date: new Date().toISOString().split('T')[0],
    progress: 0,
    notes: ''
  };

  addSession() {
    this.sessions.push({ ...this.newSession });
    this.newSession = {
      date: new Date().toISOString().split('T')[0],
      progress: 0,
      notes: ''
    };
  }

  removeSession(index: number) {
    this.sessions.splice(index, 1);
  }
}