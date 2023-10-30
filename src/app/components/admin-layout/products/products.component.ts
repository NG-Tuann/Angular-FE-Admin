import { Component} from '@angular/core';
import { Product } from 'src/app/models/admin/product';
import { ProductService } from 'src/app/services/admin/product.service';
import * as $ from 'jquery';
import { Geomancy } from 'src/app/models/admin/geomancy';
import { GeomancyService } from 'src/app/services/admin/geomancy.service';
import { ProductDto } from 'src/app/dtos/admin/product-dto';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products : Product[];

  productToEdit: ProductDto;

  geomancies : Geomancy[];

  constructor(
    private productService : ProductService,
    private geomancyService : GeomancyService,
    public loaderService : LoaderService
    ) {}
  ngOnInit(): void {
    this.onLoadProducts();

    this.hideContextMenuWhenClickOnScreen();

    this.doSthWhenClickEsc();
  }

  initNewProduct() {
    this.productToEdit = new ProductDto();
  }

  deleteProduct(id:number) {

    if(confirm('Are you sure ?')) {
      this.productService.deleteProductById(id).subscribe((result:Product[]) => {
        this.products =result;
      });
    }
  }

  onLoadProducts() {
    this.productService.findAllProducts().subscribe((result : Product[]) => {
      this.products = result;
      console.log(this.products);
    });
  }

  reloadProductList(result: Product[]) {
    // this.onLoadProducts();
    this.products = result;
    console.log(result);
  }

  showContextMenu(evt: any) {
    evt.stopPropagation(); // Ngan su kien lan ra row click

    // Lay ve menu hien tai
    const menu = evt.currentTarget as HTMLButtonElement;
    const targetElement = menu.querySelector('.side-context-option-menu') as HTMLElement;

    if (targetElement) {
      // Khi click len menu side context thi remove het cac class show vi moi lan chi xem dc 1 menu
      const contextMenuElements = document.querySelectorAll('.side-context-option-menu');
        contextMenuElements.forEach(element => {
          if(element != targetElement) {
            element.classList.remove('show-context');
          }
        });
        
        targetElement.classList.add('show-context');
    }
  }

  hideContextMenuWhenClickOnScreen() {
    document.body.addEventListener('click', function() {
      const contextMenuElements = document.querySelectorAll('.side-context-option-menu');
      contextMenuElements.forEach(element => {
        element.classList.remove('show-context');
      });
    }, true); 
  }


  
  doSthWhenClickEsc() {
    document.body.addEventListener('keyup', function(e) {
      if(e.key === "Escape") {
        // Hide context menu
        const contextMenuElements = document.querySelectorAll('.side-context-option-menu');
        contextMenuElements.forEach(element => {
         element.classList.remove('show-context');
        });
      }
    }, true); 
  }
}
