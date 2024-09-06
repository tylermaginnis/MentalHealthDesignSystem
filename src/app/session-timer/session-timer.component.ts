import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-session-timer',
  standalone: true,
  imports: [],
  templateUrl: './session-timer.component.html',
  styleUrls: ['./session-timer.component.scss']
})
export class SessionTimerComponent implements OnDestroy {
  timer: any;
  time: number = 0; // Time in seconds
  isRunning: boolean = false;

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timer = setInterval(() => {
        this.time++;
      }, 1000);
    }
  }

  stopTimer() {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.timer);
    }
  }

  resetTimer() {
    this.stopTimer();
    this.time = 0;
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  get formattedTime(): string {
    const hours = Math.floor(this.time / 3600);
    const minutes = Math.floor((this.time % 3600) / 60);
    const seconds = this.time % 60;
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  public pad(value: number): string {
    return value.toString().padStart(2, '0');
  }
}