import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingforscheduleListComponent } from './pendingforschedule-list.component';

describe('PendingforscheduleListComponent', () => {
  let component: PendingforscheduleListComponent;
  let fixture: ComponentFixture<PendingforscheduleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingforscheduleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingforscheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
