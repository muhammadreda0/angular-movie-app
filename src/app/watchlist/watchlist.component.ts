import {
    Component,
    HostListener,
    OnInit,
  } from "@angular/core";
  import { MoviecardComponent } from "../moviecard/moviecard.component";
  import { GetAPIListService } from "../services/get-apilist.service";
  
  @Component({
    selector: "app-watchlist",
    standalone: true,
    templateUrl: "./watchlist.component.html",
    styleUrl: "./watchlist.component.css",
    imports: [MoviecardComponent],
  })
  export class WatchlistComponent implements OnInit {
    movies!: any;
    moviess: any;
    constructor(private getapilistservices: GetAPIListService) {}
  
    ngOnInit() {
      this.getapilistservices
        .getData()
        .subscribe((results: any) => {
          this.movies = results.results;
  
          const watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
          if (watchList.length > 0) {
            this.moviess = this.movies.filter((movie: { id: number }) =>
              watchList.includes(movie.id)
            );
          }
        });
    }
    @HostListener("click") show() {
      this.getapilistservices
        .getData()
        .subscribe((results: any) => (this.movies = results.results));
      const watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
      if (watchList !== "[]") {
        this.moviess = this.movies.filter((movie: { id: number }) =>
          watchList.includes(movie.id)
        );
      }
    }
  }