import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchlistComponent } from '../searchlist/searchlist.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,SearchlistComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchValue !: string;
  constructor (private router :Router){}
  
  goToSearchComponent() {
  this.router.navigate(['/searchlist', this.searchValue],);
  }

}
