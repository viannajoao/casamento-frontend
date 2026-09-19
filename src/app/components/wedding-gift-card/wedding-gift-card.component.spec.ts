import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingGiftCardComponent } from './wedding-gift-card.component';

describe('WeddingGiftCardComponent', () => {
  let component: WeddingGiftCardComponent;
  let fixture: ComponentFixture<WeddingGiftCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingGiftCardComponent]
    });
    fixture = TestBed.createComponent(WeddingGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
