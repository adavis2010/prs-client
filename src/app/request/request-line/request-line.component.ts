import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-line.component.html',
  styleUrls: ['./request-line.component.css']
})
export class RequestLinesComponent implements OnInit {
  user:User;
  request:Request = null;
  showVerify: boolean=false;

  constructor(
    private route: ActivatedRoute,
    private requestsvc: RequestService

  ) { }
   
  verify(): void { this.showVerify = !this.showVerify }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(+id).subscribe(
      res => {this.request = res as Request;
        console.log(res);},
      err => {console.error(err)}
    );
  }

  
}
