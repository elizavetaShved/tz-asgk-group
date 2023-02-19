import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionComponent } from './main-section.component';
import { MySubscribersPageModule } from './pages/my-subscribers-page/my-subscribers-page.module';
import { QueryParams } from "@common/enums/query-params";

const routes: Routes = [
  {
    path: '',
    component: MainSectionComponent,
    children: [
      {
        path: QueryParams.Customers,
        loadChildren: () => import('./pages/my-subscribers-page/my-subscribers-page.module')
          .then(m => m.MySubscribersPageModule),
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
    MySubscribersPageModule
  ]
})
export class MainSectionModule {
}
