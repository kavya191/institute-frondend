import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
pswMatch:boolean=false
signupForm= this.fb.group({
  username:["",[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  email:["",[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  pass:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
  conpass:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]

})
constructor(private rout:Router,private fb: FormBuilder,private as:DataService){}


//user signup

usersignup(){
  var path=this.signupForm.value
  var username=path.username
  var email=path.email
  var psw=path.pass
  var conpsw=path.conpass

  console.log( username, psw, conpsw);
  if(this.signupForm.valid){
    if(psw==conpsw){
      this.pswMatch=false
      this.as.signupApi(username,email,psw).subscribe((response:any)=>{
        alert(`${response.username} successfully registered`)
        console.log(response.username);
        
        this.rout.navigateByUrl("")
      },
      response=>{
        alert(response.error)
      }
      )
    }else{
      this.pswMatch=true
    }
  }else {
      alert("invalid form")
    }
  
  }
 }
