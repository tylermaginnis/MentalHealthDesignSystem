import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionChecklistComponent } from './session-checklist.component';

describe('SessionChecklistComponent', () => {
  let component: SessionChecklistComponent;
  let fixture: ComponentFixture<SessionChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionChecklistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
