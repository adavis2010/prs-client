import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';;
import { SystemService } from 'src/app/system.service';
import { RequestlineService} from '../requestline.service';
import { Requestline } from '../requestline.class';
import { RequestService } from 'src/app/request/request.service';
import { Request} from '../../request/request.class'

@Component({
  selector: 'app-request-line-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {

  products: Product[]= [];
  requestId: number = 0;
  requestline: Requestline = new Requestline();
  searchCriteria: string = '';
  requests: Request[] = [];

  constructor(

    private productsvc: ProductService,
    private requestlineSvc: RequestlineService,
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService

  ) { }

  save(): void {
     this.requestline.requestId = +this.requestId;
     this.requestline.productId = +this.requestline.productId;
     this.requestlineSvc.create(this.requestline).subscribe(
       res => {
         console.log("Request Line create Successful!"),
           this.router.navigateByUrl(`/requests/lines/${this.requestline.requestId}`);
       },
       err => {
         console.error(err);
       }
     );
  }

  ngOnInit(): void {
    this.requestId = this.route.snapshot.params.id;
    this.requestsvc.list().subscribe(
      res => {
        console.log(res);
        this.requests = res as Request[];
      },
      err => {
        console.error(err);
      }
    );
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