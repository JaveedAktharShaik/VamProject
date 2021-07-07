import { Component, OnInit } from '@angular/core';
import { JavaserviceService } from '../services/javaservice.service';

@Component({
  selector: 'app-javacomp',
  templateUrl: './javacomp.component.html',
  styleUrls: ['./javacomp.component.css']
})
export class JavacompComponent  {
  filteredString:string='';
  sortby:any='1';
  courses:any=[];
  errMsg:any;
  constructor(proService:JavaserviceService){
    proService.getalljavacourse().subscribe(
      result => this.courses = result,
      error => this.errMsg = error
    )
    }

  

}
