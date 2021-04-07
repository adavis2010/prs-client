import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { Requestline } from '../../requestline/requestline.class'
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
//import { RequestlineService } from '../../requestline/request-line.service'
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {
  user:User;
  request:Request = null;
  myRequest:boolean = false;
  showDelete:boolean = false;
  showVerify: boolean=false;

  constructor(
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    private reqLinesrv: RequestlineService
  ) { }
  
  verify():void {this.showDelete = !this.showDelete}
  delete(id:number, requestid:number):void {
    
    
    
  }

  ngOnInit(): void {
    this.system.loggedinuser();
    let id = this.route.snapshot.params.id;
    this.requestsvc.detail(+id).subscribe(
      res => {this.request = res as Request;
        this.user = this.system.user;
        this.myRequest = (this.request.userId == this.user.id) ? true : false;
        console.log(res);},
      err => {console.error(err)}
    );
  }

  
}
