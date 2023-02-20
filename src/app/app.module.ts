import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { CookieModule } from '@gorniv/ngx-universal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ENVIRONMENT } from "@common/services/environment.service";
import { environment } from "../environments/environment";
import {
  ADD_SESSION_HEADERS_INTERCEPTOR_PROVIDER
} from "@common/services/api/interceptors/add-session-headers.interceptor";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CookieModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: ENVIRONMENT,
      useValue: environment
    },
    ADD_SESSION_HEADERS_INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
