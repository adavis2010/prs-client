import { Vendor } from "../vendor/vendor.class";

export class Product {
  // create Product class 

    id:number = 0;
    partNbr:string='';
    description: string='';
    price:number= 0;
    unit:string='Each';
    photoPath:string='';
    vendorId:number= 0;
    vendor: Vendor= null;
    vendorName : string ='';
    //name: string = '';

    constructor(){}

}