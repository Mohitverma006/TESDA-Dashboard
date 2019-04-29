import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesdatrainingDetailComponent } from './tesdatraining-detail.component';

describe('TesdatrainingDetailComponent', () => {
  let component: TesdatrainingDetailComponent;
  let fixture: ComponentFixture<TesdatrainingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesdatrainingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesdatrainingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
