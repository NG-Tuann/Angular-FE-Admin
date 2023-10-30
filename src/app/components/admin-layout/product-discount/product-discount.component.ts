import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/loader/loader.service';
import { ProductDiscount } from 'src/app/models/admin/product-discount';
import { ProductDiscountService } from 'src/app/services/admin/product-discount-service';

@Component({
  selector: 'app-product-discount',
  templateUrl: './product-discount.component.html',
  styleUrls: ['./product-discount.component.css']
})
export class ProductDiscountComponent implements OnInit {

  productDiscountToEdit: ProductDiscount;

  productDiscounts: ProductDiscount[];

  constructor(
    private productDiscountService: ProductDiscountService,
    public loaderService : LoaderService
  ) {}  
  ngOnInit(): void {
    this.onLoadProductDiscount();
  }

  onLoadProductDiscount() {
    this.productDiscountService.findAllProductDiscounts().subscribe((result: ProductDiscount[])=> {
      this.productDiscounts = result;
      console.log(result);
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const datePipe = new DatePipe('en'); // Chọn ngôn ngữ bạn muốn sử dụng
    return datePipe.transform(date, 'dd/MM/yyyy') || '';
  }


  initNewDiscount() {
    this.productDiscountToEdit = new ProductDiscount();
  }

}
