import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../shared/product.service";
import {FormControl} from "@angular/forms";
import "rxjs"
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:Product[]
  private keyword:string
  private titleFilter:FormControl = new FormControl()

  constructor(private productService:ProductService) {
    this.titleFilter.valueChanges.subscribe(
      value => this.keyword = value
    )
  }

  ngOnInit() {
    this.products = this.productService.getProducts()

  }

}

