import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {
  dataList:any=""

  constructor(private ds:DataService,private rout:Router){}
  ngOnInit(): void {
    
    this.ds.admissionList().subscribe((data:any)=>{
      this.dataList=data
      console.log(this.dataList);
      
    })
  }


}
