import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  products: Product = null;
  vendors: Vendor[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsrv: ProductService,
    private vendorsrv: VendorService
  ) { }

  save():void {
    this.productsrv.change(this.products).subscribe(
      res=> {
        console.log("Product edit successful");
        this.router.navigateByUrl("/products/list");
      },
      err=>{
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.productsrv.get(+id).subscribe(
      res => {
        console.log("Product", res);
        this.products = res as Product;
      },
      err => {
        console.error(err);
      }
    );

    this.vendorsrv.list().subscribe(
      res => {
        this.vendors = res as Vendor[];
      },
      err => {
        console.error(err)
      }
    );
  } 
  // this.
  // this.sys.chkLogin();
  // this.vendors.list().subscribe(
  // res => {console.debug(res); this.vendors = res;},
  // err => {console.error(err);}
  // );
  // let id = this.route.snapshot.params.id;
  // this.prd.get(+id).subscribe(
  //   res => {console.debug(res); this.products = res;},
  //   err => {console.error(err);} 
  // )
}

