import { Component, input, output, signal } from '@angular/core';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { FilterValueEnum } from '@core/enums/filters';
import { TableFilter } from '@core/interfaces/filters';

@Component({
  selector: 'app-filtre-rapide',
  imports: [MatChipsModule],
  templateUrl: './filtre-rapide.html',
  styleUrl: './filtre-rapide.scss',
})
export class FiltreRapide {
  filtersArray = input.required<TableFilter[]>();
  defaultFilter = input<string>(FilterValueEnum.ACTIVE);

  filterValue = signal<string>(this.defaultFilter());
  filterChange = output<TableFilter>(); // MULTIPLE FILTERS NOT SUPPORTED YET

  onSelectionChange(event: MatChipListboxChange) {
    console.log(event);
    if (!event.value) {
      this.filterValue.set(FilterValueEnum.ALL);
      event.value = FilterValueEnum.ALL;
    }
    this.filterChange.emit(
      this.filtersArray().find((filter) => filter.value === event.value)!,
    );
  }
}
