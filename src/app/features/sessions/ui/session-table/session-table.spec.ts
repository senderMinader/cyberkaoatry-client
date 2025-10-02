import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTable } from './session-table';

describe('SessionTable', () => {
  let component: SessionTable;
  let fixture: ComponentFixture<SessionTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionTable],
    }).compileComponents();

    fixture = TestBed.createComponent(SessionTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
