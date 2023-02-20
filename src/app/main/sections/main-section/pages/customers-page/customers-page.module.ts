import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomersPageComponent } from './customers-page.component';
import { CustomersPageResolve } from "./customers-page.resolve";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";

const routes: Routes = [
  {
    path: '',
    component: CustomersPageComponent,
    resolve: { pageData$: CustomersPageResolve }
  }
];

@NgModule({
  declarations: [
    CustomersPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatSortModule,
  ],
  providers: [
    CustomersPageResolve,
  ]
})
export class CustomersPageModule {
}
