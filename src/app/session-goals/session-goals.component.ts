import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-session-goals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './session-goals.component.html',
  styleUrls: ['./session-goals.component.scss']
})
export class SessionGoalsComponent {
  goals: { description: string, completed: boolean }[] = [];
  newGoalDescription: string = '';

  addGoal() {
    if (this.newGoalDescription.trim()) {
      this.goals.push({ description: this.newGoalDescription.trim(), completed: false });
      this.newGoalDescription = '';
    }
  }

  toggleGoalCompletion(index: number) {
    this.goals[index].completed = !this.goals[index].completed;
  }

  removeGoal(index: number) {
    this.goals.splice(index, 1);
  }
}