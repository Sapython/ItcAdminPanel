import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstationassignguideComponent } from './outstationassignguide.component';

describe('OutstationassignguideComponent', () => {
  let component: OutstationassignguideComponent;
  let fixture: ComponentFixture<OutstationassignguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstationassignguideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstationassignguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
