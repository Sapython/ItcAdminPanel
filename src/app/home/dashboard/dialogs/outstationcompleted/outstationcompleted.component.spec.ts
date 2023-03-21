import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstationcompletedComponent } from './outstationcompleted.component';

describe('OutstationcompletedComponent', () => {
  let component: OutstationcompletedComponent;
  let fixture: ComponentFixture<OutstationcompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstationcompletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstationcompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
