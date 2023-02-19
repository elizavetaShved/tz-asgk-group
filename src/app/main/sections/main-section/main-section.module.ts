import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionComponent } from './main-section.component';
import { MySubscribersPageModule } from './pages/my-subscribers-page/my-subscribers-page.module';

const routes: Routes = [
  {
    path: '',
    component: MainSectionComponent,
    children: [
      {
        path: 'my-subscribers',
        loadChildren: () => import('./pages/my-subscribers-page/my-subscribers-page.module')
          .then(m => m.MySubscribersPageModule)
      },
      {
        path: '',
        redirectTo: 'my-subscribers'
      }
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
