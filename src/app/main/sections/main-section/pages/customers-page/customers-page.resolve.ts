import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomersApiService, CustomersResponse } from "@common/services/api/customers-api.service";

@Injectable()
export class CustomersPageResolve implements Resolve<CustomersResponse> {

  constructor(
    private customersApiService: CustomersApiService
  ) {
  }

  resolve(): Observable<any> {
    return this.customersApiService.getCustomers()
      .pipe(
        catchError(() => of(null))
      );
  }
}
