import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SessionService {
  // todo any
  private readonly _user$ = new BehaviorSubject<any>(null);

  setCurrentUser(user: any): void {
    this._user$.next(user);
  }

  getCurrentUser(): any {
    return this._user$.value;
  }

  removeCurrentUser(): void {
    this._user$.next(null);
  }
}
