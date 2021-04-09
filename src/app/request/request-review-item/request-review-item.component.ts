import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { RequestService } from '../request.service';
import { SystemService } from 'src/app/system.service';
import { Request } from '../request.class';
@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {
  usersvc: UserService;
  users: User[]=[];
  requestId: number=0;
  request: Request=null;
  showReject: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private requestsvc:RequestService,
    private router: Router
  ) { }

  approve():void {
    this.requestsvc.approve(this.request).subscribe(
      res=>{
        this.router.navigateByUrl("/requests/list");
      },
      err=>{
        console.error(err);
      }
    );
  }

  verify(): void {
    this.showReject= false;
    this.requestsvc.reject(this.request).subscribe(
      res=>{
        this.router.navigateByUrl("/requests/list");
      },
      err=>{
        console.error(err);
      }
    );
  }
  reject():void {
    this.showReject=!this.showReject;
  }

  ngOnInit(): void {
    this.requestId = +this.route.snapshot.params.id;
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(+id).subscribe(
      res=>{
        console.log("Request", res);
        this.request = res as Request;
      },
      err=> {
        console.error(err);
      }
    );

  }

}
