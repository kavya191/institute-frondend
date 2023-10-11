import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor(private ds:DataService,private fb:FormBuilder) {}

  enquiryForm=this.fb.group({
    uname:['',[Validators.required, Validators.pattern('[a-z,A-Z ]+')]],
    email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$') ]],
    subject:['',[Validators.required, Validators.pattern('[a-z,A-Z ]+')]],
    message:['',[Validators.required, Validators.pattern('[a-z,A-Z ]+')]]
  })

  ngOnInit(): void {
    
  }
  userEnquiry(){
    if(this.enquiryForm.valid){
      let path=this.enquiryForm.value
    let enquiry={
      uname:path.uname,
      email:path.email,
      subject:path.subject,
      message:path.message
    }
    // console.log(enquiry);
    this.ds.userEnquiry(enquiry).subscribe((result:any)=>{
      alert("message send")
      this.enquiryForm.reset()
      console.log(result);
      
    })
    
    }else{
      alert("invalid form")
    }
    
  }

}
