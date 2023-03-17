import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouragentComponent } from './touragent.component';

describe('TouragentComponent', () => {
  let component: TouragentComponent;
  let fixture: ComponentFixture<TouragentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouragentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouragentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
