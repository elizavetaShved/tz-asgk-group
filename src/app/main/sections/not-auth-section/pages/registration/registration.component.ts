import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { QueryParams } from "@common/enums/query-params";
import { AuthApiService, AuthorizationResponse } from "@common/services/api/auth-api.service";
import { MyCookiesService } from "@common/services/my-cookies.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration.component.html',
  styleUrls: ['../@common/style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  public form = this._fb.group({
    userName: ['', [Validators.required, Validators.minLength(2)]],
    login: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]], // todo можно посложнее валидацию
  });

  public forgotPasswordLink = `/${ QueryParams.NotAuth }/${ QueryParams.Authorization }`;

  constructor(
    private _fb: FormBuilder,
    private _authApiService: AuthApiService,
    private _myCookiesService: MyCookiesService,
    private _router: Router
  ) {
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const model = {
        userName: this.form.controls.userName.value,
        login: this.form.controls.login.value,
        password: this.form.controls.password.value
      };

      this._authApiService.registration(model)
        .subscribe(
          {
            next: (data: AuthorizationResponse) => {
              const token = data.auth_token;
              if (token) {
                this._myCookiesService.setToken(token);
                this._router.navigate([`/${ QueryParams.Customers }`]);
              }
            },
            error: (error) => {
              alert(`error: ${ error.status }`);
              alert('В рамках ТЗ запроса не существует. Попробуйте авторизоваться');
            },
          })
    }
  }
}
