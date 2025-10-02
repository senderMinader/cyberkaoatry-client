import { TestBed } from '@angular/core/testing';

import { MatPaginatorCustomIntl } from './mat-paginator-custom-intl';

describe('MatPaginatorCustomIntl', () => {
  let service: MatPaginatorCustomIntl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatPaginatorCustomIntl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
