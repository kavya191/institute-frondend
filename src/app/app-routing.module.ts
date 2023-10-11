import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { CourseSingleComponent } from './course-single/course-single.component';
import { AdmissionformComponent } from './admissionform/admissionform.component';
import { PaymentComponent } from './payment/payment.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { AdminCourseViewComponent } from './admin-course-view/admin-course-view.component';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: "", component: MainhomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "userhome", component: UserhomeComponent },
  { path: "home", component: HomeComponent },
  { path: "addcourse", component: AddCourseComponent },
  { path: "blog", component: BlogComponent },
  { path: "viewStudent", component: StudentsListComponent },
  { path: "courses", component: CoursesComponent },
  { path: "contact", component: ContactComponent },
  { path: "singleview/:id", component: CourseSingleComponent },
  { path: "admissionform", component: AdmissionformComponent },
  { path: "payment", component: PaymentComponent },
  { path: "landingpage", component: LandingpageComponent },
  { path: "edit/:id", component: EditCourseComponent },
  { path: "view", component: ViewStudentsComponent },
  { path: "adminAllCourse", component: AdminCourseViewComponent },
  { path: "viewenquiry", component: ViewenquiryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
