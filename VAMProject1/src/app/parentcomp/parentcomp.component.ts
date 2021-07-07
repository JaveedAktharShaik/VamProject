import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcomp',
  templateUrl: './parentcomp.component.html',
  styleUrls: ['./parentcomp.component.css']
})
export class ParentcompComponent  {

  title = 'Assignment 11';
  Counter = 1000;
 
  countChangedHandler(count: number) {
    this.Counter = count;
    console.log(count);
  }

 
  }


