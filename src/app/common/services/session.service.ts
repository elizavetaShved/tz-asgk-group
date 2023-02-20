import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private readonly _isAuth$ = new BehaviorSubject<boolean>(false);
  readonly isAuth$ = this._isAuth$.asObservable();

  setAuthStatus(): void {
    this._isAuth$.next(true);
  }

  getAuthStatus(): any {
    return this._isAuth$.value;
  }

  removeAuthStatus(): void {
    this._isAuth$.next(false);
  }
}
