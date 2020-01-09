import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbigComponent } from './productbig.component';

describe('ProductbigComponent', () => {
  let component: ProductbigComponent;
  let fixture: ComponentFixture<ProductbigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductbigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
