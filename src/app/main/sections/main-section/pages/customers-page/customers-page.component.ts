import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
