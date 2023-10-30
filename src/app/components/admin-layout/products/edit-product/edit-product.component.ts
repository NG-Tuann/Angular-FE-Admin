import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/admin/product';
import { Geomancy } from 'src/app/models/admin/geomancy';
import { GeomancyService } from 'src/app/services/admin/geomancy.service';
import { CategoryProductService } from 'src/app/services/admin/category-product.service';
import { CategoryProduct } from 'src/app/models/admin/category_product';
import { StoneTypeService } from 'src/app/services/admin/stone-type.service';
import { StoneType } from 'src/app/models/admin/stone_type';
import { ProductService } from 'src/app/services/admin/product.service';
import { ProductDto } from 'src/app/dtos/admin/product-dto';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  // File img upload
  photo: File;
  
  // File imgs upload
  photos: File[];


  @Input() product? : ProductDto;

  products : Product[];

  stones: StoneType[];

  geomancies: Geomancy[];

  categories: CategoryProduct[];

  // Moi khi thuc hien xong se tra lai mang danh sach san pham 
  @Output() productsUpdated? = new EventEmitter<Product[]>();

  constructor(
    private geomancyService: GeomancyService,
    private categoryProductService:CategoryProductService,
    private stoneTypeService:StoneTypeService,
    private productService:ProductService
    ){
      this.photos = [];
    }

  title:string;
  ngOnInit(): void {
    // Lay ve danh sach cac menh
    this.geomancyService.findAllProducts().subscribe((result:Geomancy[]) => {
      this.geomancies = result;
    });

    // Lay ve danh sach cac danh muc san pham
    this.categoryProductService.findAllNonParentCategory().subscribe((result:CategoryProduct[]) => {
      this.categories = result;
    });

    // Lay ve danh sach cac loai da
    this.stoneTypeService.findAllStoneType().subscribe((result:StoneType[]) => {
      this.stones = result;
    });

    this.title = 'Create new product';
  }
  
  closeModal() {
    this.product = null;
  }

  // Tao moi san pham
  createNewProduct(productDb:ProductDto) {
    console.log(productDb);
    // Gan img
    productDb.file = this.photo;

    // Gan img mo ta
    productDb.files = this.photos;

    // Append form data
    const formData = new FormData();
    formData.append('file', productDb.file);
    
    for (let i = 0; i < productDb.files.length; i++) {
      formData.append('files', productDb.files[i]);
    }
    
    formData.append('mainStoneId', productDb.mainStone.toString());
    formData.append('subStoneId', productDb.subStone.toString());
    formData.append('catId', productDb.cat.toString());
    formData.append('active', productDb.active.toString());
    formData.append('homeFlag', productDb.homeFlag.toString());
    formData.append('bestSeller', productDb.bestSeller.toString());
    formData.append('note', productDb.note.toString());
    formData.append('color', productDb.color.toString());
    formData.append('geomancyId', productDb.geomancy.toString());
    formData.append('name', productDb.name);

    this.productService.createNewProduct(formData).subscribe((result:Product[])=> {
      this.productsUpdated.emit(result);
    });
    this.closeModal();
  }

  // Ho tro lay cac file

  getFile(event:any) {
    this.photo = event.target.files[0];
  }

  getFiles(event:any) {
    const files: File[] = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file: File = files[i];

      this.photos.push(file);
    }
  }
  
  // Chinh sua san pham
  updateProduct(product:ProductDto) {
    
  }
}
