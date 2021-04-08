import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from 'src/app/request/request.class';
import { User } from 'src/app/user/user.class';
import { SystemService } from 'src/app/system.service';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  user:User;
  request:Request= new Request();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService,
    private syssvc: SystemService,
  ) { }

  save():void {
    console.log("Before Create:, this.request")
      this.requestsvc.create(this.request).subscribe(
       res =>{
        console.log("Create Successful");
       this.router.navigateByUrl("/requests/list");
       },
       err =>{
         console.error(err);
       } 

      )
  }

  ngOnInit(): void {
    this.request.userId = +this.syssvc.loggedInUser.id
  }


}
