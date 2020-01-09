import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductResolveComponent } from './product-resolve.component';

describe('ProductResolveComponent', () => {
  let component: ProductResolveComponent;
  let fixture: ComponentFixture<ProductResolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductResolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
