import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionGoalsComponent } from './session-goals.component';

describe('SessionGoalsComponent', () => {
  let component: SessionGoalsComponent;
  let fixture: ComponentFixture<SessionGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionGoalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
