import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request} from  '../request.class';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  users : User
  requests: Request[]
  searchCriteria: string = "";

  constructor(
    private reqsrv: RequestService

  ) { }

  ngOnInit(): void {
    this.reqsrv.list().subscribe(
      res => {
        console.log(res);
        this.requests = res as Request[];
      },
      err => {
        console.error(err);
      }

    );
  }



}
