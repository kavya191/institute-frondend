import { Component,OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any=""

  psw:any=""
  admin:any=""
  user:any=""




constructor(private as:DataService,private fb:FormBuilder,private route:Router) {}
  ngOnInit(): void {
    if(localStorage.getItem('admin')){
      this.username=true
      this.admin=localStorage.getItem("admin")
      console.log(this.admin);
      
    }
    // if(localStorage.getItem('user')){
    //   this.userlogin=true
    //   this.user=localStorage.getItem("currentname")
    //   console.log(this.user);
      
    // }
  }
  loginModelForm=this.fb.group({
    username:["",[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  psw:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
  option:['']
})

 

  login(){
    if(this.loginModelForm.valid){

      var path=this.loginModelForm.value
      var username=path.username
      var psw=path.psw
    
      this.as.adminLoginApi(username,psw).subscribe((data:any)=>{
        localStorage.setItem("admin","admin")
        alert("admin login successfully")
        this.route.navigateByUrl("home").then(()=>{
          window.location.reload()
        })
      },(response)=>{
        alert(response.error)
      })

      // if(option=="user"){
      //   //api call
      // this.as.userLoginApi(username,psw).subscribe((response:any)=>{
      //   console.log(response);
      //   alert(`${response.username} login success`)
      
      //   //store username in localstorage
      //   localStorage.setItem("currentusername",response.username)
      //   localStorage.setItem("user","user")
      
       
      //   this.route.navigateByUrl("about").then(()=>{
      //     window.location.reload()
      //   })
      //   this.loginModelForm.reset()
    
        
      // },
      // response=>{
      //   alert(response.error)
      // })
      // }else{
      //   // var adminname=username
      //   // var adminpsw=psw
      //   this.as.adminLoginApi(username,psw).subscribe((response:any)=>{
      //     console.log(response);
      //     alert(`${response.adminname} logged in`)
      //     localStorage.setItem("currentadminname",response.username)
      //     localStorage.setItem("admin","admin")
      //     // this.ulogin=false
      //     // this.logout=true
      //     this.route.navigateByUrl("home")
          
      //   },response=>{
      //     alert(response.error)
      //   })
      // }
      
      
    }else{
      alert("invalid form")
    }
  }
}
