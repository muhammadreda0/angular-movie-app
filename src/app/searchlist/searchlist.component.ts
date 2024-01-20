import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetAPIListService } from '../services/get-apilist.service';
import { MoviecardComponent } from '../moviecard/moviecard.component';

@Component({
  selector: 'app-searchlist',
  standalone: true,
  imports: [MoviecardComponent,],
  templateUrl: './searchlist.component.html',
  styleUrl: './searchlist.component.css'
})
export class SearchlistComponent {
movies?: any[];
searchValue!: string;
constructor (private getapilistservice : GetAPIListService,private activatesroute:ActivatedRoute){}

ngOnInit(){
 this.searchValue = this.activatesroute.snapshot.params['searchValue']
 this.getapilistservice.searchMovie(this.searchValue).subscribe((respones: any) => this.movies = respones.results)
}
}
