import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Requestline } from 'src/app/requestline/requestline.class';
import { RequestService } from '../request.service';
import { Request } from 'src/app/request/request.class';

@Component({
  selector: 'app-request-line',
  templateUrl: './request-line.component.html',
  styleUrls: ['./request-line.component.css']
})
export class RequestLineComponent implements OnInit {
  requestId: number=0;
  request: Request=null;
  requestline: Requestline;
  showVerify: boolean=false;
  

  constructor(
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    //private requestlinesvc: RequestLineService
  ) { }
  
  verify(id:number):void {
    this.showVerify = false;
    //this.requestlinesvc.remove(id).subscribe(
      res=>{
        console.log("RequestLine create successful");
        this.refresh(this.requestId);
      }
    //);
  }
  refresh(id:number): void {
    this.requestsvc.get(id).subscribe(
      res=>{
        console.log("Request", res);
        this.request = res as Request;
      },
      err=>{
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.requestId = +this.route.snapshot.params.id;
    this.refresh(this.requestId);
  }

}
