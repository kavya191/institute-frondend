import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-single',
  templateUrl: './course-single.component.html',
  styleUrls: ['./course-single.component.css']
})
export class CourseSingleComponent implements OnInit {
  //create empty variable for course id
  courseid: any
  //create empty variable fot course data
  cData: any = ""
  loading: any = true
  constructor(private ds: DataService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 2000)
    this.ar.params.subscribe((data:any)=>{
      this.courseid=data.id
      console.log(this.courseid);
      console.log(data);
      
      
      
    })
    if(this.courseid !== undefined){
      this.ds.courseSingleView(this.courseid).subscribe((data:any)=>{
        this.cData=data
      })
    }
    





  }
}
