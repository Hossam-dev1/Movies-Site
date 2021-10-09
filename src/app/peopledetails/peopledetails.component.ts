import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.css']
})
export class PeopledetailsComponent implements OnInit {

  pepleDetails:any;
  peopleId:any;
  imgPrefix:string ='https://image.tmdb.org/t/p/w500/';

  constructor( private _ActivatedRoute:ActivatedRoute , private _UsersService:UsersService)
  {
    this.peopleId = this._ActivatedRoute.snapshot.params.x;

    this._UsersService.getPeoDetails(this.peopleId).subscribe((resp)=>
    {
      this.pepleDetails = resp;
      console.log(resp);
      console.log(this.peopleId);


    })
  }

  ngOnInit(): void {
  }

}
