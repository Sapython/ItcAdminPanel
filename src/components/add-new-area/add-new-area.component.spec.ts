import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAreaComponent } from './add-new-area.component';

describe('AddNewAreaComponent', () => {
  let component: AddNewAreaComponent;
  let fixture: ComponentFixture<AddNewAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
