import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingCeremonyComponent } from './wedding-ceremony.component';

describe('WeddingCeremonyComponent', () => {
  let component: WeddingCeremonyComponent;
  let fixture: ComponentFixture<WeddingCeremonyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingCeremonyComponent]
    });
    fixture = TestBed.createComponent(WeddingCeremonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
