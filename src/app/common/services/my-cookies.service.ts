import { Injectable } from '@angular/core';
import { CookieService } from '@gorniv/ngx-universal';
import { SessionService } from '@common/services/session.service';

const PREFIX = 'lz_';
const TOKEN_KEY = 'token';

@Injectable({ providedIn: 'root' })
export class MyCookiesService {
  constructor(private _cookies: CookieService,
              private _sessionService: SessionService) {
  }

  get(name: string, withoutPrefix?): string {
    const value = this._cookies.get((!withoutPrefix ? PREFIX : '') + name);

    return value === 'undefined' ? null : value;
  }

  put(name: string, val: any): void {
    this._cookies.put(PREFIX + name, val);
  }

  remove(name: string): void {
    this._cookies.remove(PREFIX + name);
  }

  setToken(token: string): void {
    this.put(TOKEN_KEY, token);
  }

  getToken(): string {
    return this.get(TOKEN_KEY);
  }

  removeToken(): void {
    this.remove(TOKEN_KEY);
    this._sessionService.removeCurrentUser();
  }
}
