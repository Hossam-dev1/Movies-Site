import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './../users.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnDestroy{


  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingPeople:any[] = [];
  peoplePic:any []= [];
  pId:any [] =[];
  pageNum:any=1;

  imgPrefix: any = "https://image.tmdb.org/t/p/w500/";
  destroyComp: any;

  profiles:any;
  term: any = "";
  constructor(private _UsersService: UsersService, private _Router: Router)
  {

    this.destroyComp = _UsersService.getTrending('movie',this.pageNum).subscribe(

      (data) =>
      {
        this.trendingMovies = data.results.slice(0, 10);
        // console.log(data);
      });

    _UsersService.getTrending('tv',this.pageNum).subscribe(

      (data) => {
        this.trendingTv = data.results.slice(0, 10);

      });

      _UsersService.getPeople(this.pageNum).subscribe(

        (data) => {

          this.trendingPeople = data.results.slice(0,16);
          for (let i = 0; i < this.trendingPeople.length; i++)
          {
            this.pId.push( this.trendingPeople[i].id)


          }

        },
        () => {},
        () =>
        {
          for (let i = 0; i < this.trendingPeople.length; i++)
          {
            this._UsersService.peoplePic(this.pId[i]).subscribe((res)=>
          {
                  this.peoplePic.push(res.profiles[0].file_path);

          })
          }
          // console.log(this.trendingPeople);


        })

      this.hello()

  }



  hello()
  {
    // for (let i = 0; i < this.trendingPeople.length; i++) {

      // console.log(this.pId);
    // }


  //  this._UsersService.peoplePic(this.pId[1]).subscribe(


  //     (data) =>
  //     {
  //       console.log(data);


  //       for (let i = 0; i < this.pId.length; i++)
  //       {

  //       }


      // this.peoplePic = data.profiles[0].file_path;
      // console.log(this.peoplePic);
      // });
  }



  next()
  {
    this.pageNum++ ;
    this._UsersService.getTrending('movie',this.pageNum).subscribe(

      (data) =>
      {
        this.trendingMovies = data.results.slice(10,20);
        console.log(data);
      }

    )
  }

  before()
  {
    this.pageNum-- ;
    this._UsersService.getTrending('movie',this.pageNum).subscribe(

      (data) =>
      {
        this.trendingMovies = data.results.slice(0,10);
        console.log(data);
      }

    )
  }

  show = false;


  toggleTable() {
    this.show = !this.show;
    // if(this.show == false)
    // {
    //     this.show = true;
    // }
    // else
    // {
    //     this.show = false;
    // }
  }




  ngOnDestroy() {
    console.log("Home Component Destroied");
    this.destroyComp.unsubscribe();
  }

}










