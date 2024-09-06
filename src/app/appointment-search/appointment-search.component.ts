import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-search',
  templateUrl: './appointment-search.component.html',
  styleUrls: ['./appointment-search.component.scss'],
  imports: [FormsModule]
})
export class AppointmentSearchComponent {
  @Input() searchTerm: string = '';
  @Input() selectedStatus: string = '';
  @Output() searchTermChange = new EventEmitter<string>();
  @Output() selectedStatusChange = new EventEmitter<string>();

  onSearchTermChange() {
    this.searchTermChange.emit(this.searchTerm);
  }

  onSelectedStatusChange() {
    this.selectedStatusChange.emit(this.selectedStatus);
  }
}