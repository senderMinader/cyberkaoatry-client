import { Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Session } from '@core/interfaces/customers';

@Component({
  selector: 'app-session-table',
  imports: [MatTableModule],
  templateUrl: './session-table.html',
  styleUrl: './session-table.scss',
})
export class SessionTable {
  sessionList = input.required<Session[]>();
  displayedColumns = input.required<string[]>();
}
