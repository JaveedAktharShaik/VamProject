import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'javeed',
  templateUrl: './Javeed.component.html',
  styleUrls: ['./Javeed.component.css']
})
export class JaveedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }

  name:string = 'Javeed';
  age:number = 21;

  customer = {
    a : 101,
    b : 'Javeed',
    c : true,
    d : [20, 21, 22],
    e : [[101,'sam'], [102,'hari'], [103,'mahesh']],
    
  }



}