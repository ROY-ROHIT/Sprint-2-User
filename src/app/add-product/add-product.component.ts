import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService,private router:Router) { }

  product:Product=new Product();
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.product);
    this.saveProduct();
  }

  saveProduct(){
    this.productService.addProduct(this.product).subscribe(data=>{
      console.log(data);
      this.goToAllProducts();
    },error=>console.log(error));
  }

  goToAllProducts(){
    this.router.navigate(['/product']);
  }

}