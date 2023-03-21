import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewcommissionComponent } from './addnewcommission.component';

describe('AddnewcommissionComponent', () => {
  let component: AddnewcommissionComponent;
  let fixture: ComponentFixture<AddnewcommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewcommissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewcommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
