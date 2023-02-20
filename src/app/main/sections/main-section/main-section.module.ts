import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionComponent } from './main-section.component';
import { CustomersPageModule } from './pages/customers-page/customers-page.module';
import { QueryParams } from "@common/enums/query-params";

const routes: Routes = [
  {
    path: '',
    component: MainSectionComponent,
    children: [
      {
        path: QueryParams.Customers,
        loadChildren: () => import('./pages/customers-page/customers-page.module')
          .then(m => m.CustomersPageModule),
      },
      {
        path: '',
        redirectTo: QueryParams.Customers,
      },
    ]
  }
];

@NgModule({
  declarations: [
    MainSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomersPageModule,
  ]
})
export class MainSectionModule {
}
