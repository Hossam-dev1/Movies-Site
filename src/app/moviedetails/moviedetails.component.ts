import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {



  movieId:any;
  movieDetials:any;
  peoPic:any
  imgPrefix:string ='https://image.tmdb.org/t/p/w500/';
  linkPrefix:any = 'https://www.youtube.com/embed/';
  // link:any = 'api.themoviedb.org/3/movie/460465/videos?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US';

  constructor( private _ActivatedRoute:ActivatedRoute , private _UsersService:UsersService)
  {

    this.movieId = _ActivatedRoute.snapshot.params.x;
    console.log(this.movieId);
    

    this._UsersService.getMovieDetails(this.movieId,'tv').subscribe((data)=>
    {
      this.movieDetials  = data;
    })


    this._UsersService.getMovieDetails(this.movieId,'movie').subscribe((data)=>
    {
      this.movieDetials  = data;

    })

    this._UsersService.getTrailer(this.movieId,'tv').subscribe((resp)=>
    {
      this.linkPrefix += resp.results[0].key;
      console.log(resp);
    },
    (error)=>
    {
        console.log('Hello'+error);

    });

    this._UsersService.getTrailer(this.movieId,'movie').subscribe((resp)=>
    {
      this.linkPrefix += resp.results[0].key;
      console.log(resp);
    },
    (error)=>
    {
        console.log('Hello'+error);

    });



  }




  ngOnInit(): void {
  }

}
