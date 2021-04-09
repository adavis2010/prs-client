import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { User } from 'src/app/user/user.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { Requestline } from 'src/app/requestline/requestline.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-line.component.html',
  styleUrls: ['./request-line.component.css']
})
export class RequestLinesComponent implements OnInit {
  user:User;
  request:Request = null;
  showDelete: boolean =false;
  requestId: number;
  requestline: Requestline;

  constructor(
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    private requestlineSvc: RequestlineService

  ) { }
   
  verify(): void { this.showDelete = !this.showDelete }
  
  delete(id:number): void {
    this.showDelete=false;
    this.requestlineSvc.delete(id).subscribe(
      res =>{
        this.refresh(this.requestId)
      }
    );
    
  }
  refresh(id:number):void{
    this.requestsvc.get(+id).subscribe(
      res => {
        this.request =res as Request;
      },
      err => {console.error(err)}
    );
  }

  ngOnInit(): void {
    this.requestId=+this.route.snapshot.params.id;
    this.refresh(this.requestId);

  }

  
}
