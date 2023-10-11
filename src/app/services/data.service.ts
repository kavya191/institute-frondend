import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor(private http:HttpClient) { }

  //api for register
  signupApi(username:any,email:any,psw:any){
    const bodydata={username,email,psw}

   return this.http.post('http://localhost:3001/admission/userRegistration',bodydata)
  }

  //api for admin registration

  adminRegister(username:any,email:any,psw:any){
    const bodydata={username,email,psw}

    return this.http.post('http://localhost:3001/admission/adminRegister',bodydata)
  }

  //api for user login
  userLoginApi(username:any,psw:any){
    const bodydata={username,psw}
    return this.http.post('http://localhost:3001/admission/userlogin',bodydata)
  }
  //api for admin login
  adminLoginApi(username:any,psw:any){
    const bodydata={username,psw}
    return this.http.post('http://localhost:3001/admission/adminlogin',bodydata)
  }
  //api for add course
adminAddCourse(cData:any){
    

      return this.http.post('http://localhost:3001/admission/addcourse',cData)
  }
  //api for view all courses

  viewAllCourseApi(){
    return this.http.get('http://localhost:3001/admission/viewAllCourses')
  }
  //api for getting course id to edit 
  // edit(courseid:any){
  //   return this.http.get('http://localhost:3001/admission/updatecourse/updateCourse/'+courseid)

  // }
  //api for editing
  doEdit(courseid:any,updateCourse :any){
    return this.http.post('http://localhost:3001/admission/editcoursedetails/'+courseid,updateCourse)
  }

  

  //api for view  course single view
  courseSingleView(courseid:any){
    return this.http.get('http://localhost:3001/admission/viewSingle/'+courseid)
  }

  //api for user enquiry
  userEnquiry(eData:any){
    
    return this.http.post('http://localhost:3001/admission/userEnquiry',eData)
  }
  //api for user admission
  userAdmission(rData:any){
    return this.http.post('http://localhost:3001/admission/studentAdmission',rData)
  }
  //api for getting registered userlist
  admissionList(){
    return this.http.get('http://localhost:3001/admission/getAdmissionlist')
  }

  //api for getting user enquiryies
  userEnquiryList(){
    return this.http.get('http://localhost:3001/admission/getUserEnquiryList')
  }
}
