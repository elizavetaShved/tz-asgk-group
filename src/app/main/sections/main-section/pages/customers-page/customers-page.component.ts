import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MatSort, Sort } from "@angular/material/sort";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { MatTableDataSource } from "@angular/material/table";
import { CustomersResponse } from "@common/services/api/customers-api.service";

// todo удалить
const FAKE_DATA: CustomersResponse[] = [
  { idCard: 1, name: 'Hydrogen', phone: '+7-999-999-99-99' },
  { idCard: 2, name: 'Helium', phone: '+7-999-999-99-99' },
  { idCard: 3, name: 'Lithium', phone: '+7-999-999-99-99' },
  { idCard: 4, name: 'Beryllium', phone: '+7-999-999-99-99' },
  { idCard: 5, name: 'Boron', phone: '+7-999-999-99-99' },
  { idCard: 6, name: 'Carbon', phone: '+7-999-999-99-99' },
];

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersPageComponent implements OnInit {
  displayedColumns: string[] = ['idCard', 'name', 'phone'];
  customersList = new MatTableDataSource([]);

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    let pageData: CustomersResponse[] = this._activatedRoute.snapshot.data.pageData;
    // todo удалить фейковые данные
    if (!pageData) pageData = FAKE_DATA;
    if (pageData) {
      this.customersList = new MatTableDataSource(pageData);
    }

    // todo реализ-ть ленивую подгрузку по limit offset
  }

  ngAfterViewInit() {
    this.customersList.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${ sortState.direction }ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
