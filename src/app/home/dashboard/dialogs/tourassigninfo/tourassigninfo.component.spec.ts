import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourassigninfoComponent } from './tourassigninfo.component';

describe('TourassigninfoComponent', () => {
  let component: TourassigninfoComponent;
  let fixture: ComponentFixture<TourassigninfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourassigninfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourassigninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
