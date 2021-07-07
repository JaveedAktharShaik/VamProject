import { Component, OnInit } from "@angular/core"
import { DataserviceService } from "../services/dataservice.service"

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  customerss:any=[]
  customerss1:any=[
   {"empId":101,"empName":"Javeed","salary":20000},
   {"empId":102,"empName":"Akthar","salary":19000},
   {"empId":103,"empName":"Imran","salary":18000}
  ]
 
   constructor(private dataService:DataserviceService) {
 
   }
   ngOnInit(): void {
     this.dataService.currentMsg.subscribe((successMsg: any) => this.customerss = successMsg)
    }
   modifiedData(){
   // this.customerss.push({"empId":101,"empName":"Javeed","salary":20000})
    //this.customerss.push({"empId":102,"empName":"Akthar","salary":19000})
   //this.customerss.push({"empId":103,"empName":"Imran","salary":18000})
 
     //for(var c of this.customerss)
     //this.dataService.changeData(c)
 
     for(var i=0;i<this.customerss1.length;i++){
       this.dataService.changeData(this.customerss1[i])
        }
 
   }

  

}
