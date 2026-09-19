import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingCountdownComponent } from './wedding-countdown.component';

describe('WeddingCountdownComponent', () => {
  let component: WeddingCountdownComponent;
  let fixture: ComponentFixture<WeddingCountdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingCountdownComponent]
    });
    fixture = TestBed.createComponent(WeddingCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
