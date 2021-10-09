import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) {}

  getTrending(mediaType:string, page:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50&page=${page}`);
  }
  getMovieDetails(id:any, type:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`);
  }
  getTrailer(id:any,type:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=1cf50e6248dc270629e802686245c2c8&language=en-US`);
  }


  pageTv(page:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=1cf50e6248dc270629e802686245c2c8&language=en-US&page=${page}`);
  }

  getPeople(page:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=1cf50e6248dc270629e802686245c2c8&language=en-US&page=${page}`);
  }
  peoplePic(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}/images?api_key=1cf50e6248dc270629e802686245c2c8`);

  }

  getPeoDetails(personId:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${personId}?api_key=1cf50e6248dc270629e802686245c2c8&language=en-US`);
  }
}

