import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDetailViewComponent } from './session-detail-view.component';

describe('SessionDetailViewComponent', () => {
  let component: SessionDetailViewComponent;
  let fixture: ComponentFixture<SessionDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionDetailViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
