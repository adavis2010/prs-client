import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';;
import { SystemService } from 'src/app/system.service';
//import { Requestline} from 'src/app/requestline'
import {RequestLineService} from 
@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {

  products: Product[];
  requestId: number = 0;
  //requestLine: Requestline = new Requestline();

  constructor(

    private productsvc: ProductService,
    //private requestlineSvc: RequestLineService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService

  ) { }

  save(): void {
    // this.requestLine.requestId = +this.requestId;
    // this.requestLine.productId = +this.requestLine.productId;
    // //this.requestlineSvc.create(this.requestLine).subscribe(
    //   res => {
    //     console.log("Request Line create Successful!"),
    //       this.router.navigateByUrl(`/requests/lines/${this.requestId}`);
    //   },
    //   err => {
    //     console.error(err);
    //   }
    // );
  }

  ngOnInit(): void {
    //this.sys.loggedInUser();
    this.requestId = +this.route.snapshot.params.id;
    this.productsvc.list().subscribe(
      res => {
        console.log(res);
        this.products = res as Product[];
      },
      err => {
        console.error(err);
      }
    );
  }

}