import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalapplicantListComponent } from './finalapplicant-list.component';

describe('FinalapplicantListComponent', () => {
  let component: FinalapplicantListComponent;
  let fixture: ComponentFixture<FinalapplicantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalapplicantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalapplicantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
