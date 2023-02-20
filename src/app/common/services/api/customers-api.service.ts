import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { EnvironmentService } from "@common/services/environment.service";
import { AuthorizationResponse } from "@common/services/api/auth-api.service";
import { MyCookiesService } from "@common/services/my-cookies.service";

const LIMIT = 100;

@Injectable({ providedIn: 'root' })
export class CustomersApiService {
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _environmentService: EnvironmentService,
    private _myCookiesService: MyCookiesService,
  ) {
  }

  getCustomers(search: string, offset: number): Observable<any> {
    const token = this._myCookiesService.getToken();

    return this._httpClient.get<AuthorizationResponse>(
      `${ this._environmentService.environment.apiBaseUrl }/${ token }/passes?${ search }&${ LIMIT }&${ offset }`
    );
  }
}
