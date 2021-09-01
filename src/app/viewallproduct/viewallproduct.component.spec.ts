import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallproductComponent } from './viewallproduct.component';

describe('ViewallproductComponent', () => {
  let component: ViewallproductComponent;
  let fixture: ComponentFixture<ViewallproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
