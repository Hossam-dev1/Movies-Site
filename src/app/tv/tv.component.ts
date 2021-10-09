import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  tvData:any[]=[];
  imgPrefix: any = "https://image.tmdb.org/t/p/w500/";
  pageNum:any= 1;
  term:any = '';
  constructor(private _UsersService:UsersService)
  {
      _UsersService.getTrending('tv',this.pageNum).subscribe((resp)=>
      {
        this.tvData = resp.results;
        console.log(resp)
      })
  }
  next()
  {
      this.pageNum++ ;

      this._UsersService.pageTv(this.pageNum).subscribe(

      (data) =>
      {
        this.tvData = data.results;
        console.log(data);
      }
    )
  }

  before()
  {
      this.pageNum-- ;

      this._UsersService.pageTv(this.pageNum).subscribe(

      (data) =>
      {
        this.tvData = data.results;
        console.log(data);
      }
    )
  }

  ngOnInit(): void {
  }

}
