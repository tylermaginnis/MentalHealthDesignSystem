import { Component, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-session-detail-view',
  templateUrl: './session-detail-view.component.html',
  styleUrls: ['./session-detail-view.component.scss']
})
export class SessionDetailViewComponent {
  expandedSections: { [key: string]: boolean } = {
    summary: true, // Automatically open the summary section
    goals: false,
    history: false,
    notes: false,
    checklist: false,
    progressTracker: false,
    recording: false,
    resources: false,
    feedbackForm: false,
    timer: false
  };

  constructor(private el: ElementRef, private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  toggleSection(section: string) {
    this.expandedSections[section] = !this.expandedSections[section];
    this.cdr.detectChanges(); // Force change detection
    const content = this.el.nativeElement.querySelector(`.tab-content.${section}`);
    if (content) {
      if (this.expandedSections[section]) {
        // Force reflow to ensure the height is calculated correctly
        content.style.display = 'block';
        const height = content.scrollHeight;
        content.style.display = '';
        requestAnimationFrame(() => {
          this.renderer.setStyle(content, 'max-height', `${height}px`);
          console.log(`Opening section: ${section}, max-height: ${height}px`);
        });
      } else {
        this.renderer.setStyle(content, 'max-height', '0');
        console.log(`Closing section: ${section}`);
      }
    } else {
      console.error(`Element with class .tab-content.${section} not found`);
    }
  }

  isSectionExpanded(section: string): boolean {
    return this.expandedSections[section];
  }
}