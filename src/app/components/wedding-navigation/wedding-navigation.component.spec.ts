import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingNavigationComponent } from './wedding-navigation.component';

describe('WeddingNavigationComponent', () => {
  let component: WeddingNavigationComponent;
  let fixture: ComponentFixture<WeddingNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingNavigationComponent]
    });
    fixture = TestBed.createComponent(WeddingNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
