import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserhomeComponent } from './userhome/userhome.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { CourseSingleComponent } from './course-single/course-single.component';
import { AdmissionformComponent } from './admissionform/admissionform.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SearchPipe } from './coursePipe/search.pipe';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { AdminCourseViewComponent } from './admin-course-view/admin-course-view.component';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';
import { BlogComponent } from './blog/blog.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AddCourseComponent,

    StudentsListComponent,
    UserhomeComponent,
    MainhomeComponent,
    CoursesComponent,
    ContactComponent,
    CourseSingleComponent,
    AdmissionformComponent,
    PaymentComponent,
    LandingpageComponent,
    SearchPipe,
    EditCourseComponent,
    ViewStudentsComponent,
    AdminCourseViewComponent,
    ViewenquiryComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
