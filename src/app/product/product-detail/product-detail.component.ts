import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

const baseurl = "http://localhost:32405/api/products";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = null;
  vendors: Vendor[] = [];
  showVerify: boolean = false; // verify button

  toggleVerify(): void {
    this.showVerify= !this.showVerify;
  }

  delete(): void {
    this.productsvc.remove(this.product).subscribe(
      res => {
        console.log("Product Change Successful");
        this.router.navigateByUrl("/product/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.productsvc.get(+id).subscribe(
      res => {
        console.log("Product", res)
        this.product = res as Product;
      },
      err => {
        console.error(err);
      }
    );

    this.vendorsvc.list().subscribe(
      res => {
        this.vendors = res as Vendor[];
      },
      err => {
        console.error(err)
      }
    );
  } }