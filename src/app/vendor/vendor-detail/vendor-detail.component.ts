import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor} from '../vendor.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})

export class VendorDetailComponent implements OnInit {
  vendor:Vendor = null;
  id: number =0;
  showVerify: boolean = false; //verify button

  vendors: Vendor[];
  sortCriteria: string="id";
  sortAsc: boolean=true;
 
 

  sort(column:string): void {
    if(column === this.sortCriteria) {
      this.sortAsc= !this.sortAsc;
      return;
    }
    this.sortAsc=true;
    this.sortCriteria=column;
  }

  constructor(
    private vndrsvc: VendorService
  ) { }

  ngOnInit(): void {
    this.vndrsvc.list().subscribe(
      res => {
        console.log(res);
        this.vendors = res as Vendor[]
      },
      err=> {
        console.error(err);
      }
    );
  }
}
  