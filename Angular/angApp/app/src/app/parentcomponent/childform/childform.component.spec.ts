import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildformComponent } from './childform.component';

describe('ChildformComponent', () => {
  let component: ChildformComponent;
  let fixture: ComponentFixture<ChildformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
