import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent {
  courseid: any
  cData: any = ""



  constructor(private ds: DataService, private fb: FormBuilder, private ar: ActivatedRoute, private rout: Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      console.log(data.id);
      this.courseid = data.id
     
    })
    this.ds.courseSingleView(this.courseid).subscribe((data: any) => {
      console.log(data);
      this.cData = data

    })

  }
  editData() {
    this.ds.doEdit(this.courseid, this.cData).subscribe((result: any) => {
      alert("course data updated successfully")
     
      this.cData = result
      console.log(result);
      this.rout.navigateByUrl("adminAllCourse")

    })
  }





}


