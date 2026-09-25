import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingContactComponent } from './wedding-contact.component';

describe('WeddingContactComponent', () => {
  let component: WeddingContactComponent;
  let fixture: ComponentFixture<WeddingContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingContactComponent]
    });
    fixture = TestBed.createComponent(WeddingContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
