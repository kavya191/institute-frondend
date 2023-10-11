import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  admin: boolean = false
  userLogin: boolean = false
  adminLogin: boolean = true
  adminLogout: boolean = false
  logindisable: boolean = true

  constructor(private rout: Router) { }
  ngOnInit(): void {
    // if (!localStorage.getItem("currentusername")) {
    //   alert("please login first")
    //   this.rout.navigateByUrl("login")
    // }
    if (localStorage.getItem("admin")) {
      this.adminLogin = !this.adminLogin
      this.adminLogout = !this.adminLogout
      this.logindisable = !this.logindisable
      console.log(this.logindisable);

      // this.user = localStorage.getItem("currentusername")
      // this.userLogin=false


    }
  }
  logout() {

    localStorage.removeItem("admin")
    alert('logout successfully')
    this.adminLogin = true;

    this.rout.navigateByUrl("").then(() => {
      window.location.reload()
    })

  }
}
