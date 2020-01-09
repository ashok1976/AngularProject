import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCompnentComponent } from './dynamic-compnent.component';

describe('DynamicCompnentComponent', () => {
  let component: DynamicCompnentComponent;
  let fixture: ComponentFixture<DynamicCompnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCompnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
