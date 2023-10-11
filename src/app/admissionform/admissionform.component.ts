import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admissionform',
  templateUrl: './admissionform.component.html',
  styleUrls: ['./admissionform.component.css']
})
export class AdmissionformComponent {
 
  admissionMatch:boolean=false

  userAdmissionForm=this.fb.group({
    fullname:["",[Validators.required,Validators.pattern('[a-zA-Z]+')]],
        dob:["",[Validators.required]],
        contactno:['',[Validators.required,Validators.pattern('[0-9]+')]],
        email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        qualification:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
        year:['',[Validators.required,Validators.pattern('[0-9]+')]],
        percentage:['',[Validators.required,Validators.pattern('[0-9]+')]],
        idproof:[''],
        photo:[''] 
  })
  constructor(private ds:DataService,private fb: FormBuilder,private rout:Router) {}

studentAdmission(){
  if(this.userAdmissionForm.valid){
    var path=this.userAdmissionForm.value
    var student={
       fullname:path.fullname,
     dob:path.dob,
       contactno:path.contactno,
       email:path.email,
      qualification:path.qualification,
       year:path.year,
       percentage:path.percentage,
    idproof:path.idproof,
      photo:path.photo
    }
    console.log(student);
    this.ds.userAdmission(student).subscribe((data:any)=>{
      alert("registered successfully")
      this.userAdmissionForm.reset()
      this.rout.navigateByUrl("payment")
      console.log(data);
      
    })
    

  }else(
    alert("Invalid form")
  )
}

}
