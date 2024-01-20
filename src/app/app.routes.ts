import { Routes } from '@angular/router';
import { MovieslistComponent } from './movieslist/movieslist.component';


import path from 'node:path';
import { SearchlistComponent } from './searchlist/searchlist.component';

export const routes: Routes = [

    {path: '', component : MovieslistComponent},
    {path: 'searchlist/:searchValue', component : SearchlistComponent},
];
