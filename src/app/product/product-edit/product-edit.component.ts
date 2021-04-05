import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
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
  products: Product
  vendors: Vendor[] = []

  constructor(
    private sys: SystemService,
    private prd: ProductService,
    private vendorservice: VendorService,
    private route: ActivatedRoute,
    private router: Router


  ) { }

  save(): void{
    console.debug("Before:, this.product");
    this.prd.change(this.products).subscribe(
      res => {console.debug(res); this.router.navigateByUrl("/product/list");},
      err => {console.error(err);}

    )

  }

  ngOnInit(): void {
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
}
