import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/vendor/vendor.class'
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from 'src/app/vendor/vendor.service';
import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

 products: Product = new Product(); 
 vendors: Vendor[]=[];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vndrsvc: VendorService,
    private productsvc: ProductService
  ) { }
 
  save():void{
    this.products.vendorId = +this.products.vendorId
    this.productsvc.create(this.products).subscribe(
      res=>{
        console.log("Product create successful")
        this.router.navigateByUrl("/products/list")
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.vndrsvc.list().subscribe(
      res=>{
        this.vendors = res as Vendor [];
      },
      err=>{
        console.error(err);
      } 
    )
  }


}


