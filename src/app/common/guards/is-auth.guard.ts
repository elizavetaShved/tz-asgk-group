import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { MyCookiesService } from '@common/services/my-cookies.service';
import { QueryParams } from "@common/enums/query-params";

@Injectable()
export class IsAuthGuard implements CanActivate, CanActivateChild {
  constructor(private _myCookiesService: MyCookiesService,
              private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._myCookiesService.getToken()) {
      return true;
    } else {
      this._router.navigate([`/${ QueryParams.NotAuth }`]);
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }
}
