import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomersPageComponent } from './customers-page.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersPageComponent,
    // resolve: {pageData$: MySubscribersPageResolve}
  }
];

@NgModule({
  declarations: [
    CustomersPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  // providers: [
  //   MySubscribersPageResolve
  // ]
})
export class CustomersPageModule {
}
