import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Injectable()
export class MatPaginatorCustomIntl implements MatPaginatorIntl {
  changes: Subject<void> = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  // firstPageLabel = $localize`First page`;*
  firstPageLabel = 'Première page';
  //itemsPerPageLabel = $localize`Items per page:`;
  itemsPerPageLabel = 'Éléments par page :';
  // lastPageLabel = $localize`Last page`;
  lastPageLabel = 'Dernière page';

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Page suivante';
  previousPageLabel = 'Page précédente';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      // return $localize`Page 1 of 1`;
      return 'Page 1 sur 1';
    }
    const amountPages = Math.ceil(length / pageSize);
    // return $localize`Page ${page + 1} of ${amountPages}`;
    return `Page ${page + 1} sur ${amountPages}`;
  }
}
