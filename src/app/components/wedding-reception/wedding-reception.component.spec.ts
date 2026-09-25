import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingReceptionComponent } from './wedding-reception.component';

describe('WeddingReceptionComponent', () => {
  let component: WeddingReceptionComponent;
  let fixture: ComponentFixture<WeddingReceptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingReceptionComponent]
    });
    fixture = TestBed.createComponent(WeddingReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
