import { Pipe, PipeTransform } from '@angular/core';
import { Vendor} from './vendor.class'


@Pipe({
    name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

    transform(vendors: Vendor[], searchCriteria): Vendor[] {
        let selectedVendors: Vendor[] = [];
        if (searchCriteria.length == 0) {
            return vendors;
        }
        for (let vendor of vendors) {
            if (
                vendor.code.toString().includes(searchCriteria.toLowerCase)
                || vendor.name.toString().includes(searchCriteria.toLowerCase)
                || vendor.code.toString().includes(searchCriteria.toLowerCase)
                || vendor.address.toString().includes(searchCriteria.toLowerCase)
                || vendor.city.toString().includes(searchCriteria.toLowerCase)
                || vendor.state.toString().includes(searchCriteria.toLowerCase)
                || vendor.id.toString().includes(searchCriteria.toLowerCase)
                || vendor.zip.toString().includes(searchCriteria.toLowerCase)

                || (vendor.phone != null &&
                    vendor.phone.toString().includes(searchCriteria.toLowerCase()))

                || (vendor.email != null &&
                    vendor.email.toString().includes(searchCriteria.toLowerCase()))

            )
                selectedVendors.push(vendor)
        }

        return selectedVendors;
    }

}

