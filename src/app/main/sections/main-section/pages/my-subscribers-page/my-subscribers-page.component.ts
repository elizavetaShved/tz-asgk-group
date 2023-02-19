import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-subscribers-page',
  templateUrl: './my-subscribers-page.component.html',
  styleUrls: ['./my-subscribers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MySubscribersPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
