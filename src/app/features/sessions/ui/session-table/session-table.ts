import { Component, computed, input, output, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Session } from '@core/interfaces/customers';
import { MatIconModule } from '@angular/material/icon';
import { DateTimeFormatPipe } from '@shared/pipes/datetime-pipe-pipe';
import {
  MatPaginatorModule,
  MatPaginatorIntl,
  PageEvent,
} from '@angular/material/paginator';
import { MatPaginatorCustomIntl } from '@core/services/mat-paginator-custom-intl';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SearchBar } from '@shared/components/search-bar/search-bar';

@Component({
  selector: 'app-session-table',
  imports: [
    MatTableModule,
    MatIconModule,
    DateTimeFormatPipe,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
    SearchBar
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorCustomIntl }],
  templateUrl: './session-table.html',
  styleUrl: './session-table.scss',
})
export class SessionTable {
  sessionList = input.required<Session[]>();
  displayedColumns = input.required<string[]>();

  deletedSession = output<string>();
  stoppedSession = output<string>();
  pageChange = output<PageEvent>();
  sortChange = output<Sort>();

  sortedField = signal<string>('');

  readonly totalCount = computed(() => this.sessionList().length);

  onDelete(session: Session) {
    console.log(session);
    this.deletedSession.emit(session._id);
  }

  onStop(session: Session) {
    console.log(session);
    this.stoppedSession.emit(session._id);
  }

  onPageChange(event: PageEvent) {
    console.log(event);
    this.pageChange.emit(event);
  }

  onSortChange(event: Sort) {
    console.log(event);
    this.sortChange.emit(event);
    this.sortedField.set(event.active);
  }

  onSearch(keyword: string) {
    console.log('searching...', keyword);
  }
}
