import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../services/webservice.service';

@Component({
  selector: 'app-webcomp',
  templateUrl: './webcomp.component.html',
  styleUrls: ['./webcomp.component.css']
})
export class WebcompComponent  {
  filteredString:string='';
  sortby:any='1';
  courses:any=[];
  errMsg:any;
  constructor(proService:WebserviceService){
    proService.getallwebcourse().subscribe(
      result => this.courses = result,
      error => this.errMsg = error
    )
    }


}
