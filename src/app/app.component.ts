import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {  SearchComponent } from './search/search.component';
import {  MovieslistComponent } from './movieslist/movieslist.component';
import {  NavComponent } from './nav/nav.component';
// import {  HeaderComponent } from './header/';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SearchComponent,MovieslistComponent,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Movie-App';
}
