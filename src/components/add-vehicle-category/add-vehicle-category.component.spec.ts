import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleCategoryComponent } from './add-vehicle-category.component';

describe('AddVehicleCategoryComponent', () => {
  let component: AddVehicleCategoryComponent;
  let fixture: ComponentFixture<AddVehicleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVehicleCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVehicleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
