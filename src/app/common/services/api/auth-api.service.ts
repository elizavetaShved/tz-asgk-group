import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from "@common/services/environment.service";

export interface AuthorizationRequestInterface {
  login: string,
  password: string,
}

export interface AuthorizationResponse {
  auth_token: string,
}

export interface RegistrationRequestInterface {
  userName: string,
  login: string,
  password: string,
}

export interface RegistrationResponse {
  auth_token: string,
}

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _environmentService: EnvironmentService,
  ) {
  }

  authorization(model: AuthorizationRequestInterface): Observable<AuthorizationResponse> {
    return this._httpClient.post<AuthorizationResponse>(
      `${ this._environmentService.environment.apiBaseUrl }/test-auth-only`,
      model
    );
  }

  registration(model: RegistrationRequestInterface): Observable<RegistrationResponse> {
    return this._httpClient.post<AuthorizationResponse>(
      `${ this._environmentService.environment.apiBaseUrl }/test-registration-only`,
      model
    );
  }

  logout(): Observable<AuthorizationResponse> {
    return this._httpClient.delete<AuthorizationResponse>(
      `${ this._environmentService.environment.apiBaseUrl }/test-auth-only`
    );
  }
}
