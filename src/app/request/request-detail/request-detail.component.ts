import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/request/request.class';
import { RequestService } from '../request.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request = null;
  showDelete: boolean = false; // delete button

  toggleVerify(): void {
    this.showDelete = !this.showDelete; // delete
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reqService: RequestService,
    private sys: SystemService
  ) { }

  verify(): void { this.showDelete = !this.showDelete }

  delete(): void {
    this.reqService.delete(this.request.id).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error(err);
      }
    )
  }
  review(): void {
    this.reqService.review(this.request).subscribe(
      res => {
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.reqService.get(+id).subscribe(
      res => { this.request = res as Request; },
      err => { console.error(err) }
    )
  }

}


