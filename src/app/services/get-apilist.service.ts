import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAPIListService {

  constructor(private http:HttpClient) {}

 getData(){
 return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=6795618303e502bcf5f108ef8fb77131')
 }

getDataDetails(id : any){
  return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6795618303e502bcf5f108ef8fb77131`)
}

searchMovie(query: string){
  return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=${query}`)
}
getDatarecommend(id : any){
  return this.http.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=6795618303e502bcf5f108ef8fb77131`)
  }
}

