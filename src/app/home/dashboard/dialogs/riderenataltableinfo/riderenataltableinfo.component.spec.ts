import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderenataltableinfoComponent } from './riderenataltableinfo.component';

describe('RiderenataltableinfoComponent', () => {
  let component: RiderenataltableinfoComponent;
  let fixture: ComponentFixture<RiderenataltableinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderenataltableinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiderenataltableinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
