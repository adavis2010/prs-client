import { Pipe, PipeTransform } from '@angular/core';
import { Product} from './product.class'


@Pipe({
    name: 'ProductSearch'
})
export class ProductSearchPipe implements PipeTransform {

    transform(products: Product[], searchCriteria): Product[] {
        let selectedProducts: Product[] = [];
        if (searchCriteria.length == 0) {
           return products;
        }
        for (let product of products) {
            if (product.id.toString().includes(searchCriteria.toLowerCase)
                || product.partNbr.toString().includes(searchCriteria.toLowerCase)
                || product.description.toString().includes(searchCriteria.toLowerCase)
                || product.price.toString().includes(searchCriteria.toLowerCase)
                || product.unit.toString().includes(searchCriteria.toLowerCase)
                || product.photoPath.toString().includes(searchCriteria.toLowerCase)
                || product.vendorId.toString().includes(searchCriteria.toLowerCase)
            )
                selectedProducts.push(product)
        }

        return selectedProducts;
    }

}

