import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-bar',
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {
  // TO DO : Use input stream to add debounce time
  keyword = output<string>();
  placeholder = input<string>('Rechercher par Pseudo, Appareil ou Heure de début ');

  onSearch() {
    this.keyword.emit((document.querySelector('input') as HTMLInputElement).value);
  }
}
