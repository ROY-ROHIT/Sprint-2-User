import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductbyIdComponent } from './viewproductby-id.component';

describe('ViewproductbyIdComponent', () => {
  let component: ViewproductbyIdComponent;
  let fixture: ComponentFixture<ViewproductbyIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproductbyIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
