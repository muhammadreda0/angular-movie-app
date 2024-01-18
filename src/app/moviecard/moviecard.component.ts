import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-moviecard',
  standalone: true,
  imports: [],
  templateUrl: './moviecard.component.html',
  styleUrl: './moviecard.component.css'
})
export class MoviecardComponent {
@Input()movie !: any


goToDeatilsPage(){
  // this.router.navigate([`details/${this.movie.id}`]);
}
}
