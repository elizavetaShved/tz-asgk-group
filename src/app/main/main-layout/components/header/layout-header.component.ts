import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MyCookiesService } from "@common/services/my-cookies.service";
import { AuthApiService } from "@common/services/api/auth-api.service";
import { QueryParams } from "@common/enums/query-params";
import { Router } from "@angular/router";
import { SessionService } from "@common/services/session.service";

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHeaderComponent {

  constructor(
    private _authApiService: AuthApiService,
    private _myCookiesService: MyCookiesService,
    private _router: Router,
    public sessionService: SessionService,
  ) {
  }

  private exit() {
    this._myCookiesService.removeToken();
    this._router.navigate([`/${ QueryParams.Authorization }`]);
  }

  onLogout(): void {
    this._authApiService.logout()
      .subscribe(
        {
          next: () => {
           this.exit();
          },
          error: () => {
            const ok = confirm('Запрос не работает. Сделаем вид, что статус 200?)');
            if (ok) {
              this.exit();
            }
          },
        })
  }
}
