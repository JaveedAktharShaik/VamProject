import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculatorcomponent',
  templateUrl: './calculatorcomponent.component.html',
  styleUrls: ['./calculatorcomponent.component.css']
})
export class CalculatorcomponentComponent  {

  
  number1:any;
  number2:any;
  number3:any;
  result:any;
  value:any;
  constructor(private calculatorService:CalculatorService)
  {
    
  }
  operation(value:any)
  {
    var value1=(Number)(this.number1)
    var value2=(Number)(this.number2)
    var value3=(Number)(this.number3)
    this.number3=this.calculatorService.getResult(value1,value2,value3,value)
  }

  
  }

