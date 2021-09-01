import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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

  onSelect(pro:any){
    this.router.navigate(['/product-by-id',pro.productId]);
  }
}
