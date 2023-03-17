import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstaionCompleteInfoComponent } from './outstaion-complete-info.component';

describe('OutstaionCompleteInfoComponent', () => {
  let component: OutstaionCompleteInfoComponent;
  let fixture: ComponentFixture<OutstaionCompleteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstaionCompleteInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstaionCompleteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
