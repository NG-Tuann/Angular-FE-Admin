import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/loader/loader.service';
import { Product } from 'src/app/models/admin/product';
import { ProductService } from 'src/app/services/admin/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products : Product[];

  productEditable: Product = null;

  // productToEdit: Product;

  ngOnInit(): void {
    this.onLoadProducts();
  }

    constructor(
      private productService : ProductService,
      public loaderService : LoaderService
    ) {}

    onLoadProducts() {
      this.productService.findAllProducts().subscribe((result : Product[]) => {
        this.products = result;
        console.log(this.products);
      });
    }

    onShowProductDetail(product: Product) {
      this.productService.findProductById(product.id).subscribe((result:Product) => {
        this.productEditable = result;
        console.log(result)
      });
    }

    // Khi o component con cap nhat state cua san pham
    onUpdateProductState() {
      this.onLoadProducts();
    }
}
