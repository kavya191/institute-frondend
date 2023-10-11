import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  courses:any=[]
  searchTerm:any=""
  

  constructor(private ds:DataService){}
 ngOnInit(): void {
  this.ds.viewAllCourseApi().subscribe((response:any)=>{
    if(response){
      this.courses=response
    }
  },
  response=>{
    alert(response.error)
  })
  
   
 }
 search(event:any){
  this.searchTerm.event.target.value
  console.log(this.searchTerm);
  

  
 }

}
