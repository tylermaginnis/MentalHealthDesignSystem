import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionResourcesComponent } from './session-resources.component';

describe('SessionResourcesComponent', () => {
  let component: SessionResourcesComponent;
  let fixture: ComponentFixture<SessionResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
