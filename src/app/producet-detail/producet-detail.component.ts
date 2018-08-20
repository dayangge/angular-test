import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, ProductService, Comment} from "../shared/product.service";

@Component({
  selector: 'app-producet-detail',
  templateUrl: './producet-detail.component.html',
  styleUrls: ['./producet-detail.component.css']
})
export class ProducetDetailComponent implements OnInit {
  product:Product;
  comment:Comment[];
  newRating:number = 5
  newComment:string
  commentIsShow:boolean = true
  constructor(private routeInfo:ActivatedRoute,
              private productService:ProductService) { }
  // 当前激活的路由对象，主要用于保存路由，获取路由传递的参数。

  ngOnInit() {
    let productId = this.routeInfo.snapshot.params["productId"]
    this.product = this.productService.getProduct(productId)
    this.comment = this.productService.getProductComment(productId)
  }
  addComment() {
    let i = new Comment(0,this.product.id,new Date().toISOString(),"son",this.newRating,this.newComment )
    this.comment.unshift(i);
    this.newRating = 5;
    this.newComment= null;
    this.commentIsShow = true;
    let sum = this.comment.reduce((sum,item) => sum + item.rating,0)
    this.product.rating = sum/this.comment.length
  }



}
