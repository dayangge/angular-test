import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, Validator, Validators} from "@angular/forms";
import {ProductService} from "../shared/product.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  formModel:FormGroup
  categroy:string[]

  constructor(private productService:ProductService) {
    let fb = new FormBuilder()
    this.formModel = fb.group({
      title:['',Validators.minLength(3)],
      price:[null,this.positiveNumberValidator],
      categroy:['-1']
    })
  }
  positiveNumberValidator(control:FormControl):any{
    if(control.value ){
      return null
    }
    let price = parseInt(control.value)
    if(price>0){
      return null
    }else {
      return {positiveNumber: true}
    }
  }

  ngOnInit() {
    this.categroy = this.productService.getAllCategories()
  }
  onSerach() {
    if(this.formModel.valid){
      console.log(this.formModel.value)
    }
  }
}
