import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor: Vendor = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vndrsvc: VendorService
  ) { }

  save():void {
    this.vndrsvc.change(this.vendor).subscribe(
      res=> {
        console.log("Vendor edit successful");
        this.router.navigateByUrl("/vendors/list");
      },
      err=>{
        console.error(err);
      }
    );
  }


  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.vndrsvc.get(+id).subscribe(
      res=> {
        console.log("Vendor", res);
        this.vendor = res as Vendor;
      },
      err => {
        console.error(err);
      }
    );
  }

}
