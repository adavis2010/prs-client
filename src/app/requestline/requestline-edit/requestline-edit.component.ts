import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { SystemService } from 'src/app/system.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {
  products: Product[];
  requestline: Requestline = new Requestline();
  searchCriteria: string = '';


  constructor(
    private productsvc: ProductService,
    private requestlineSvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService
  ) { }

  edit(): void {
    this.requestline.productId = +this.requestline.productId;
    this.requestlineSvc.edit(this.requestline).subscribe(
      res => {
        console.log("Request Line Edit Successful!"),
          this.router.navigateByUrl(`/requests/lines/${this.requestline.requestId}`);
      },
      err => {
        console.error(err);
      }
    );
  }


  ngOnInit(): void {
    //this.sys.loggedInUser();
    let id = +this.route.snapshot.params.id;
    this.productsvc.list().subscribe(
      res => {
        console.log(res);
        this.products = res as Product[];
      },
      err => {
        console.error(err);
      }
    );
    this.requestlineSvc.get(+id).subscribe(
      res => { console.log(res); this.requestline = res; },
      err => { console.error(err); }
    );
  }
}


