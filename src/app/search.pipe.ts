import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies:any[] , term:string ): any[] {


   return movies.filter((movie)=> {

      if(movie.title)
      {
        return  movie.title.toLowerCase().includes(term.toLowerCase())
      }
      else
      {
        return  movie.name.toLowerCase().includes(term.toLowerCase())

      }


    })

  }

}
