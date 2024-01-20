import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
goToSearch() {
throw new Error('Method not implemented.');
}

goTosearch(){

}
}
