import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewallproduct',
  templateUrl: './viewallproduct.component.html',
  styleUrls: ['./viewallproduct.component.css']
})
export class ViewallproductComponent implements OnInit {

  public product:Product[]=[];
  searchText="";

  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.productService.getProduct().subscribe(data=>{
      this.product=data;
    })
  }

  updateProduct(productId:number){
    this.router.navigate(["update-product",productId]);
  }

  getProductById(productId:number){
    this.router.navigate(["viewproductby-id",productId]);
  }

  deleteProduct(productId:number){
    this.productService.deleteProduct(productId).subscribe(data=>{
      alert('Product Deleted Successfully...');
      this.gotogetProducts();
    })
  }

  gotogetProducts(){
    // window.location.reload();
    // this.router.navigate(['/product']);
    this.router.navigate([this.router.url]);
  }

}
