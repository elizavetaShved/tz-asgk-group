import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { LayoutHeaderComponent } from './components/header/layout-header.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    MainLayoutComponent,
    LayoutHeaderComponent
  ],
	imports: [
		CommonModule,
		RouterModule,
		MatButtonModule,
	]
})
export class MainLayoutModule {
}
