import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBannerComponent } from './delete-banner.component';

describe('DeleteBannerComponent', () => {
  let component: DeleteBannerComponent;
  let fixture: ComponentFixture<DeleteBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
