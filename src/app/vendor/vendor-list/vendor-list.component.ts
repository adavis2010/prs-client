import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service'

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit { // implements = Interface

  constructor(
    private vndrsvc: VendorService  // Inject Vendor Service
  ) { }

  vendors: Vendor[];
  searchCriteria: string = "";
  sortAsc: boolean=true;
 

  // sort(column:string): void {
  //   if(column === this.sort) {
  //     this.sortAsc= !this.sortAsc;
  //     return;
  //   }
   //  this.sortAsc=true;
    
 // }

  ngOnInit(): void {
    this.vndrsvc.list().subscribe(
      users => {
        console.log("Vendors: vendor", )
        this.vendors = this.vendors;

      },
      err => {
        console.error(err);
      }

    );
  }
}


