import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from 'src/app/request/request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request=null;
  users: User[]=[];
  showVerify: boolean = false; // verify button

  toggleVerify(): void {
    this.showVerify= !this.showVerify; // delete
  }

  constructor(
    private requestsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute,
    private usersvc: UserService
  ) { }

  delete():void {
    this.requestsvc.remove(this.request.id).subscribe(
      res => {
        console.log("Request change successful");
        this.router.navigateByUrl("/request/list");
      },
      err=>{
        console.error(err);
      }
    );
  }
  review():void {
    this.requestsvc.review(this.request).subscribe(
      res=>{
        this.router.navigateByUrl("/request/list");
      },
      err=>{
        console.error(err);
      }
    );
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(+id).subscribe(
      res=>{
        console.log("Request", res)
        this.request = res as Request;
      },
      err=> {
        console.error(err);
      }
    );

    this.usersvc.list().subscribe(
      res => {
        this.users = res as User[];
      },
      err=>{
        console.error(err);
      }
    );
  }

}
