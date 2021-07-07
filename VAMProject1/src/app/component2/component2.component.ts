import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  customerss:any=[]
  customerss1:any=[
    {"empId":104,"empName":"Javeed","salary":20000},
    {"empId":105,"empName":"Akthar","salary":19000},
    {"empId":106,"empName":"Imran","salary":18000}
  ]





  constructor(private dataService:DataserviceService) {
    dataService.currentMsg.subscribe((successMsg: any) => this.customerss = successMsg)
  }
  ngOnInit(): void {  }
  modifiedData(){


     // this.customerss.push( {"empId":104,"empName":"Javeed","salary":20000})
     // this.customerss.push( {"empId":105,"empName":"Akthar","salary":19000})
      //this.customerss.push( {"empId":106,"empName":"Imran","salary":18000})


     for(var i=0;i<this.customerss1.length;i++){
    this.dataService.changeData(this.customerss1[i])
     }
  }

}

  