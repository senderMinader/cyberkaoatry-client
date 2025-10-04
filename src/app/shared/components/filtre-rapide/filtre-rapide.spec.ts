import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreRapide } from './filtre-rapide';

describe('FiltreRapide', () => {
  let component: FiltreRapide;
  let fixture: ComponentFixture<FiltreRapide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltreRapide],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltreRapide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
