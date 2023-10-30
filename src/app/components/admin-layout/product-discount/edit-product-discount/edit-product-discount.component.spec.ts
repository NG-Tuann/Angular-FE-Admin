import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductDiscountComponent } from './edit-product-discount.component';

describe('EditProductDiscountComponent', () => {
  let component: EditProductDiscountComponent;
  let fixture: ComponentFixture<EditProductDiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProductDiscountComponent]
    });
    fixture = TestBed.createComponent(EditProductDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
