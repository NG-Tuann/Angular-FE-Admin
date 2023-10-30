import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/admin/product';
import { ProductDetail } from 'src/app/models/admin/product_detail';
import { ProductPrice } from 'src/app/models/admin/product_price';
import { ProductDetailService } from 'src/app/services/admin/product-detail.service';
import { ProductService } from 'src/app/services/admin/product.service';

@Component({
  selector: 'app-edit-product-details',
  templateUrl: './edit-product-details.component.html',
  styleUrls: ['./edit-product-details.component.css']
})
export class EditProductDetailsComponent implements OnInit {

  @Input() product: Product;

  productDetailToEdit: ProductDetail = null;

  @Output() updateProductState: EventEmitter<any> = new EventEmitter();

  constructor(
    private productDetailService: ProductDetailService,
    private productService: ProductService
  ) {
    
  }
  ngOnInit(): void {
    
  }

  closeModal() {
    this.product = null;
    this.onCloseCreateOrUpdateForm();
  }

  // Bien object thanh array
  toArray(obj: Object): any[] {
    return Object.values(obj);
  }

  // Format date
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const datePipe = new DatePipe('en'); // Chọn ngôn ngữ bạn muốn sử dụng
    return datePipe.transform(date, 'dd/MM/yyyy') || '';
  }

  // Format date for mapping to input type date
  formatExactDate(dateString: string): Date {
    const date = new Date(dateString);
    return date;
  }

  addProductDetail() {
    this.productDetailToEdit = new ProductDetail();
    this.productDetailToEdit.productPrice = new ProductPrice();
  }

  onAddProductDetail(pd: ProductDetail) {
    console.log(pd);
    pd.product = this.product;
    this.productDetailService.create(pd).subscribe((result:ProductDetail[]) => {
      this.product.productDetails = result;
    });
  }

  editProductDetail(pd: ProductDetail) {
    this.productDetailToEdit = pd;
    // Format datae
    this.productDetailToEdit.createdDate = this.formatExactDate(pd.createdDate.toString());
    console.log(this.productDetailToEdit);
  }

  onCloseCreateOrUpdateForm() {
    this.productDetailToEdit = null;
  }

  // Khi nguoi dung cap nhat 3 muc best seller, active, homeflag cua san pham
  onActiveChange(product: Product){
    this.productService.updateActive(product.id).subscribe((result:string) => {
      alert(result);
      // Phat den component cha va load lai ds sanpham
      this.updateProductState.emit();
    });
  }

  onBestSellerChange(product: Product){
    this.productService.updateBestSeller(product.id).subscribe((result:string) => {
      alert(result);
      // Phat den component cha va load lai ds sanpham
      this.updateProductState.emit();
    });
  }

  onHomeFlagChange(product: Product){
    this.productService.updateHomeFlag(product.id).subscribe((result:string) => {
      alert(result);
      // Phat den component cha va load lai ds sanpham
      this.updateProductState.emit();
    });
  }

}
