import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { RequestService } from '../request.service';
import { Request } from 'src/app/request/request.class';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

  requests: Request[];
  request:Request= new Request();
  searchCriteria: string='';


  constructor(
    private syssvc: SystemService,
    private requestsvc: RequestService 
  ) { }

  ngOnInit(): void {
    this.request.userId=+this.syssvc.loggedInUser.id;
    this.requestsvc.review(this.request).subscribe(
      res=>{
        console.log(res);
        this.requests = res as Request[]
      },
      err=>{
        console.error(err);
      }
    );


  }

}
