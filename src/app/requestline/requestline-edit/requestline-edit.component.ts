import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  constructor(
    // private route = 
  ) { }

 ngOnInit(): void {
    // this.prd.list().subscribe(
    //  res =>{console.debug(res); products = res};
    //  err => {console.error(err)}
    // );
    // this.requestline.requestId = this.route.snapshot.params.rid;
  }

}
