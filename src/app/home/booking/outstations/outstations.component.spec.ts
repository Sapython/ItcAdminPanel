import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstationsComponent } from './outstations.component';

describe('OutstationsComponent', () => {
  let component: OutstationsComponent;
  let fixture: ComponentFixture<OutstationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
