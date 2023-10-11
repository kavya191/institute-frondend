import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(course:any[],searchString:string,propertyName:string): any {
    const result:any=[]
    if(!course || !searchString || !propertyName){
      return course
    }else{
      course.forEach((item:any)=>{
        if(item[propertyName].trim().toLowerCase().includes(searchString.trim().toLowerCase())){
          result.push(item)
        }
      })
      return result
    }
  }

}
