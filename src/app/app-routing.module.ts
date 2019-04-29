import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgetPassword',
    component:ForgetPasswordComponent
  },
  {
    path:'createAccount',
    component:CreateAccountComponent
  },
  {
    path:'home',
    component:HomeComponent,
      children:[
        {
          path:'',
          component:ProfileDetailComponent
        },
        {
          path:'profileDetail',
          component:ProfileDetailComponent
        },
        {
          path:'applicant',
          component:ApplicantComponent,
            children:[
              {
                path:'',
                component:ApplicantListComponent
              },
              {
                path:'applicantList',
                component:ApplicantListComponent
              },
              {
                path:'applicantView',
                component:ApplicantViewComponent,
                children:[
                  {
                    path:'',
                    component:PersonalDetailComponent
                  },
                  {
                    path:'personalDetail',
                    component:PersonalDetailComponent
                  },
                  {
                    path:'premedDetail',
                    component:PremedDetailComponent
                  },
                  {
                    path:'passportStatus',
                    component:PassportStatusComponent
                  },
                  {
                    path:'finalmedDetail',
                    component:FinalmedDetailComponent
                  },
                  {
                    path:'tesdatrainingDetail',
                    component:TesdatrainingDetailComponent
                  },

               ]
              }
            ]
        },
      
  {
    path:'scheduled',
    component:ScheduledComponent,
      children:[
        {
          path:'',
          component:ScheduledListComponent
        },
        {
          path:'scheduledList',
          component:ScheduledListComponent
        },
        {
          path:'updateStatus',
          component:UpdateStatusComponent
        }
      ]
  },
  {
    path:'pendingforSchedule',
    component:PendingforScheduleComponent,
      children:[
        {
          path:'',
          component:PendingforscheduleListComponent
        },
        {
          path:'pendingforscheduleList',
          component:PendingforscheduleListComponent
        },
        {
          path:'schedule',
          component:ScheduleComponent
        }
      ]
  },
  {
    path:'finalApplicant',
    component:FinalApplicantComponent,
      children:[
        {
          path:'',
          component:FinalapplicantListComponent
        },
        {
          path:'finalapplicantList',
          component:FinalapplicantListComponent,
        },
        {
          path:'applicantView',
          component:ApplicantViewComponent,
          children:[
            {
              path:'',
              component:PersonalDetailComponent
            },
            {
              path:'personalDetail',
              component:PersonalDetailComponent
            },
            {
              path:'premedDetail',
              component:PremedDetailComponent
            },
            {
              path:'passportStatus',
              component:PassportStatusComponent
            },
            {
              path:'finalmedDetail',
              component:FinalmedDetailComponent
            },
            {
              path:'tesdatrainingDetail',
              component:TesdatrainingDetailComponent
            },
  
         ]
        }
      ]
  },
  {
    path:'failedApplicant',
    component:FailedApplicantComponent,
    children:[
      {
        path:'',
        component:FailedapplicantListComponent
      },
      {
        path:'failedapplicantList',
        component:FailedapplicantListComponent
      },
      {
        path:'applicantView',
        component:ApplicantViewComponent,
        children:[
          {
            path:'',
            component:PersonalDetailComponent
          },
          {
            path:'personalDetail',
            component:PersonalDetailComponent
          },
          {
            path:'premedDetail',
            component:PremedDetailComponent
          },
          {
            path:'passportStatus',
            component:PassportStatusComponent
          },
          {
            path:'finalmedDetail',
            component:FinalmedDetailComponent
          },
          {
            path:'tesdatrainingDetail',
            component:TesdatrainingDetailComponent
          },
       ]
      }
    ]
  }

]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
