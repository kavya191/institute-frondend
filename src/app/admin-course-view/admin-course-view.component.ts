import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-admin-course-view',
  templateUrl: './admin-course-view.component.html',
  styleUrls: ['./admin-course-view.component.css']
})
export class AdminCourseViewComponent {

  courses:any=[]
  constructor(private ds: DataService, private ar: ActivatedRoute){}
  ngOnInit(): void {
    this.ds.viewAllCourseApi().subscribe((response:any)=>{
      if(response){
        this.courses=response
        console.log(this.courses);
        
      }
    },
    response=>{
      alert(response.error)
    })
    
     
   }
 
}
