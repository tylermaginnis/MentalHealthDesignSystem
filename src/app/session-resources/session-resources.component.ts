import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-session-resources',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './session-resources.component.html',
  styleUrls: ['./session-resources.component.scss']
})
export class SessionResourcesComponent {
  resources: { name: string, url: string }[] = [];
  newResource: { name: string, url: string } = { name: '', url: '' };

  addResource() {
    if (this.newResource.name.trim() && this.newResource.url.trim()) {
      this.resources.push({ ...this.newResource });
      this.newResource = { name: '', url: '' };
    }
  }

  removeResource(index: number) {
    this.resources.splice(index, 1);
  }
}