import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetAPIListService } from '../services/get-apilist.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor (private activeRoute :ActivatedRoute,private getapilistservices : GetAPIListService){}
  searchtext :any 

ngOnInit(){
  let query = this.activeRoute.snapshot.paramMap.get('query')
  console.warn(query);
  
}

}
