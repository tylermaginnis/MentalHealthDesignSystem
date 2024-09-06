import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-session-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './session-history.component.html',
  styleUrls: ['./session-history.component.scss']
})
export class SessionHistoryComponent {
  sessions: { date: string, summary: string }[] = [];
  newSession: { date: string, summary: string } = { date: '', summary: '' };

  addSession() {
    if (this.newSession.date.trim() && this.newSession.summary.trim()) {
      this.sessions.push({ ...this.newSession });
      this.newSession = { date: '', summary: '' };
    }
  }

  removeSession(index: number) {
    this.sessions.splice(index, 1);
  }
}