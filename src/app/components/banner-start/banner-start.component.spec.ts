import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerStartComponent } from './banner-start.component';

describe('BannerStartComponent', () => {
  let component: BannerStartComponent;
  let fixture: ComponentFixture<BannerStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerStartComponent]
    });
    fixture = TestBed.createComponent(BannerStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
