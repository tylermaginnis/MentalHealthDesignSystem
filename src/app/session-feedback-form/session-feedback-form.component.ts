import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-session-feedback-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './session-feedback-form.component.html',
  styleUrls: ['./session-feedback-form.component.scss']
})
export class SessionFeedbackFormComponent {
  feedback: {
    rating: number,
    comments: string
  } = {
    rating: 0,
    comments: ''
  };

  submitFeedback() {
    console.log('Feedback submitted:', this.feedback);
    // Implement feedback submission logic here
  }
}