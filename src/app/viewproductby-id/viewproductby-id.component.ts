import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewproductby-id',
  templateUrl: './viewproductby-id.component.html',
  styleUrls: ['./viewproductby-id.component.css']
})
export class ViewproductbyIdComponent implements OnInit {
  public id:any;
  product: Product=new Product();

  constructor(private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    let pid=this.route.snapshot.paramMap.get('productId');
    this.id=pid;

    this.productService.getProductById(this.id).subscribe(data=>{
      this.product=data;
    },error=>console.log(error));
  }

}
