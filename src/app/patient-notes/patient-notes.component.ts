import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-notes',
  templateUrl: './patient-notes.component.html',
  styleUrls: ['./patient-notes.component.scss']
})
export class PatientNotesComponent {
  @Input() notes: { date: string, content: string, tags: string[], attachments: string[], author: string }[] = [];
  newNoteContent: string = '';
  newNoteTags: string = '';
  newNoteAttachments: string[] = [];
  currentUser: string = 'Dr. John Doe'; // This should be dynamically set based on the logged-in user
  searchQuery: string = '';

  addNote() {
    if (this.newNoteContent.trim()) {
      this.notes.push({
        date: new Date().toISOString(),
        content: this.newNoteContent,
        tags: this.newNoteTags.split(',').map(tag => tag.trim()),
        attachments: this.newNoteAttachments,
        author: this.currentUser
      });
      this.newNoteContent = '';
      this.newNoteTags = '';
      this.newNoteAttachments = [];
    }
  }

  handleFileInput(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.newNoteAttachments.push(files[i].name);
    }
  }

  editNoteContent(note: any, newContent: string) {
    note.content = newContent;
  }

  filterNotes() {
    return this.notes.filter(note => 
      note.content.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      note.tags.some(tag => tag.toLowerCase().includes(this.searchQuery.toLowerCase()))
    );
  }
}