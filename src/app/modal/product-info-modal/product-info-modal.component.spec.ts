import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoModalComponent } from './product-info-modal.component';

describe('ProductInfoModalComponent', () => {
  let component: ProductInfoModalComponent;
  let fixture: ComponentFixture<ProductInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
