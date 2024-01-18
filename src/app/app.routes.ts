import { Routes } from '@angular/router';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { SearchComponent } from './search/search.component';
import path from 'node:path';

export const routes: Routes = [

    {path: '', component : MovieslistComponent},
    {path: 'search/:query', component : SearchComponent},
];
