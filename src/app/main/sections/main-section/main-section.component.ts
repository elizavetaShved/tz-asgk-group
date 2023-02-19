import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
