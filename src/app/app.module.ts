import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ScheduledComponent } from './scheduled/scheduled.component';
import { PendingforScheduleComponent } from './pendingfor-schedule/pendingfor-schedule.component';
import { FinalApplicantComponent } from './final-applicant/final-applicant.component';
import { FailedApplicantComponent } from './failed-applicant/failed-applicant.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ScheduledListComponent } from './scheduled-list/scheduled-list.component';
import { PendingforscheduleListComponent } from './pendingforschedule-list/pendingforschedule-list.component';
import { FinalapplicantListComponent } from './finalapplicant-list/finalapplicant-list.component';
import { FailedapplicantListComponent } from './failedapplicant-list/failedapplicant-list.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { PremedDetailComponent } from './premed-detail/premed-detail.component';
import { PassportStatusComponent } from './passport-status/passport-status.component';
import { FinalmedDetailComponent } from './finalmed-detail/finalmed-detail.component';
import { TesdatrainingDetailComponent } from './tesdatraining-detail/tesdatraining-detail.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ApplicantViewComponent } from './applicant-view/applicant-view.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    ForgetPasswordComponent,
    HomeComponent,
    ApplicantComponent,
    ScheduledComponent,
    PendingforScheduleComponent,
    FinalApplicantComponent,
    FailedApplicantComponent,
    ApplicantListComponent,
    ScheduledListComponent,
    PendingforscheduleListComponent,
    FinalapplicantListComponent,
    FailedapplicantListComponent,
    PersonalDetailComponent,
    PremedDetailComponent,
    PassportStatusComponent,
    FinalmedDetailComponent,
    TesdatrainingDetailComponent,
    ProfileDetailComponent,
    ApplicantViewComponent,
    UpdateStatusComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
