import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { RequestService } from '../request.service';
import { Request } from 'src/app/request/request.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request=null;
  users: User[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService,
    private usersvc: UserService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(+id).subscribe(
      res=>{
        console.log("Request", res);
        this.request = res as Request;
      },
      err=>{
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
