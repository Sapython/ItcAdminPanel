import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmGreenComponent } from './confirm-green.component';

describe('ConfirmGreenComponent', () => {
  let component: ConfirmGreenComponent;
  let fixture: ComponentFixture<ConfirmGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmGreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
