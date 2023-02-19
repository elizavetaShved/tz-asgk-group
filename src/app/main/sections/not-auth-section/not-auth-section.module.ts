import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthSectionComponent } from './not-auth-section.component';
import { QueryParams } from "@common/enums/query-params";

const routes: Routes = [
  {
    path: '',
    component: NotAuthSectionComponent,
    children: [
      {
        path: QueryParams.Authorization,
        loadChildren: () => import('./pages/authorization/authorization.module')
          .then(m => m.AuthorizationModule),
      },
      {
        path: QueryParams.Registration,
        loadChildren: () => import('./pages/registration/registration.module')
          .then(m => m.RegistrationModule),
      },
      {
        path: '',
        redirectTo: QueryParams.Authorization,
      },
    ]
  }
];

@NgModule({
  declarations: [
    NotAuthSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NotAuthSectionModule {
}
