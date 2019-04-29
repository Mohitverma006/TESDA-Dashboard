import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedapplicantListComponent } from './failedapplicant-list.component';

describe('FailedapplicantListComponent', () => {
  let component: FailedapplicantListComponent;
  let fixture: ComponentFixture<FailedapplicantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedapplicantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedapplicantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
