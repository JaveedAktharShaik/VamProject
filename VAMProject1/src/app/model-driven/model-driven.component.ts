import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productForm = new FormGroup({
    productName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-z]{5,15}$')]),
    address:new FormGroup({
      city:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-z]{1,15}$')]),
      postal:new FormControl('',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
    })
  })
  // constructor(private formBuilder:FormBuilder){}
  // productForm = this.formBuilder.group({
  //   productName: ['', [Validators.required, Validators.pattern('^[a-zA-z]{5,9}$')]]
  // })

  submitData() {
    console.log(this.productForm)
    console.log(this.productForm.value)
  }



}
