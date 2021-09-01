import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {

  public cat:any;
  public product:Product[]=[];
  constructor(private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    let ctg=this.route.snapshot.paramMap.get('category');
    this.cat=ctg;

    this.productService.getProductByCategory(this.cat).subscribe(data=>{
      this.product=data;
    },error=>console.log(error));
  }

  onSelect(pro:any){
    this.router.navigate(['/product-by-id',pro.productId]);
  }

}
