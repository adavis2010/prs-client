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
 

  ngOnInit(): void {
    this.vndrsvc.list().subscribe(
      vendors => {
        console.log("Vendors: vendor", )
        this.vendors = vendors;

      },
      err => {
        console.error(err);
      }

    );
  }
}


