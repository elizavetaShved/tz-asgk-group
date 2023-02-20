import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { EnvironmentService } from "@common/services/environment.service";
import { MyCookiesService } from "@common/services/my-cookies.service";

export interface CustomersResponse {
  idCard: number;
  name: string;
  phone: string;
}

const LIMIT = 100;

@Injectable({ providedIn: 'root' })
export class CustomersApiService {
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _environmentService: EnvironmentService,
    private _myCookiesService: MyCookiesService,
  ) {
  }

  getCustomers(search?: string, offset?: number): Observable<CustomersResponse[]> {
    const token = this._myCookiesService.getToken();
    const searchParamsStr = search ? `?${ search }/${ LIMIT }/${ offset }` : '';

    return this._httpClient.get<any>(
      `${ this._environmentService.environment.apiBaseUrl }/v1/${ token }/passes${ searchParamsStr }`
    );
  }
}
