import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-auth',
  templateUrl: './not-auth-section.component.html',
  styleUrls: ['./not-auth-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotAuthSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
