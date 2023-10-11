import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {




  addCourseForm=this.fb.group({
    
      courseid:['',[Validators.required,Validators.pattern('[0-9 ]+')]],
      coursename:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
      description:['',[Validators.required]],
      duration:['',[Validators.required,Validators.pattern('[0-9 ]+')]],
      coursefee:['',[Validators.required,Validators.pattern('[0-9 ]+')]],
      seat:['',[Validators.required,Validators.pattern('[0-9 ]+')]],
      time:['',[Validators.required,Validators.pattern('[0-9 ]+')]],
      place:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]]
  })

  ngOnInit(): void {
 
  }

  constructor(private ds:DataService,private fb: FormBuilder,private rout:Router){}

  addCourse(){
    if(this.addCourseForm.valid){
      var path=this.addCourseForm.value
 
      var courses={
         courseid:path.courseid,
        coursename:path.coursename,
         description:path.description,
         duration:path.duration,
         coursefee:path.coursefee,
         seat:path.seat,
        time:path.time,
        place:path.place
      }
  
  console.log(courses);
   this.ds.adminAddCourse(courses).subscribe((result:any)=>{
    alert("new course added")
    this.rout.navigateByUrl("home")
    this.addCourseForm.reset()
    console.log(result);
    
   })
    }else{
      alert("invalid form")
    }
  
 
 

   }
  


}
