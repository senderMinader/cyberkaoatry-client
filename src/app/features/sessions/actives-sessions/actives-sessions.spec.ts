import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivesSessions } from './actives-sessions';

describe('ActivesSessions', () => {
  let component: ActivesSessions;
  let fixture: ComponentFixture<ActivesSessions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivesSessions],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivesSessions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
