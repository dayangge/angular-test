import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products:Product[] = [
    new Product(1, "第一个商品", 2.33, 4.5, "这是一件好商品", ["华西电子", "大宗商品"]),
    new Product(2, "第二个商品", 4.33, 3.5, "这是一件好商品", ["服饰", "大宗商品"]),
    new Product(3, "第三个商品", 5.33, 4.0, "这是一件好商品", ["服饰", "华西电子"]),
    new Product(4, "第四个商品", 6.33, 4.5, "这是一件好商品", ["华西电子", "服饰"]),
    new Product(5, "第五个商品", 7.33, 2.5, "这是一件好商品", ["服饰", "大商品"]),
    new Product(6, "第六个商品", 8.33, 4.0, "这是一件好商品", ["华西电子", "大宗商品"])
  ];
  private comment:Comment[] = [
    new Comment(1,1,"2o18-02-04 22:22:22", "zhangsan",3,"东西不错"),
    new Comment(2,1,"2o18-03-04 12:02:22", "sun",4,"东西不错"),
    new Comment(3,1,"2o18-02-27 02:22:22", "jokey",5,"东西不错"),
    new Comment(4,1,"2o18-02-24 12:22:22", "孙三",2,"东西不错"),
    new Comment(5,2,"2o18-02-25 12:22:22", "朱玉涛",3,"东西不错"),
    new Comment(6,2,"2o18-12-22 22:32:02", "安贞焕",5,"东西不错")
  ];
  constructor() { }
  getProducts():Product[] {
    return this.products
  }
  getProduct(id:number):Product {
    return this.products.find( function(item) { return item.id == id})
  }
  getProductComment(id:number):Comment[] {
    return this.comment.filter((comment) => comment.productId == id)
  }

  getAllCategories():string[]{
    return ["华西电子", "大宗商品", "服饰"]
  }


}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categroies: Array<string>
  ) {
  }
}
export class Comment {
  constructor(public id:number,
              public productId:number,
              public timestamp:string,
              public user:string,
              public rating:number,
              public content:string
  ){

  }
}
