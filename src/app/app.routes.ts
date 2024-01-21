import { Routes } from '@angular/router';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { SearchComponent } from './search/search.component';
import path from 'node:path';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

export const routes: Routes = [

    {path: '', component : MovieslistComponent},
    {path: 'search/:query', component : SearchComponent},
    {path:'details/:id' , component:MovieDetailsComponent},
    {path:'watchlist' , component:WatchlistComponent}

];
