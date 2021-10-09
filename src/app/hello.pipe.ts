import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hello'
})
export class HelloPipe implements PipeTransform {

  transform(tvs:any[] , term:string ): any[] {


    return tvs.filter((tv)=> {

        if(tv.title)
        {
          return  tv.title.toLowerCase().includes(term.toLowerCase())
        }
        else
        {
          return  tv.name.toLowerCase().includes(term.toLowerCase())

        }


      })

    }

}
