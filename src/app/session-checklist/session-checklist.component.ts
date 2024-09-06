import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-session-checklist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './session-checklist.component.html',
  styleUrls: ['./session-checklist.component.scss']
})
export class SessionChecklistComponent {
  checklist: { item: string, completed: boolean }[] = [];
  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.checklist.push({ item: this.newItem.trim(), completed: false });
      this.newItem = '';
    }
  }

  toggleItemCompletion(index: number) {
    this.checklist[index].completed = !this.checklist[index].completed;
  }

  removeItem(index: number) {
    this.checklist.splice(index, 1);
  }
}