import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-viewenquiry',
  templateUrl: './viewenquiry.component.html',
  styleUrls: ['./viewenquiry.component.css']
})
export class ViewenquiryComponent implements OnInit {
  enquiryList:any=""
  constructor(private ds:DataService){}
  
  ngOnInit(): void {
       
    this.ds.userEnquiryList().subscribe((data:any)=>{
      this.enquiryList=data
      console.log(this.enquiryList);
      
    })
  }

}
