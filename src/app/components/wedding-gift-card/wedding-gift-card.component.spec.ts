import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeddingGiftCardComponent } from './wedding-gift-card.component';

describe('WeddingGiftCardComponent', () => {
  let component: WeddingGiftCardComponent;
  let fixture: ComponentFixture<WeddingGiftCardComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [CommonModule], declarations: [WeddingGiftCardComponent] });
    fixture = TestBed.createComponent(WeddingGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => {
    if (component.paymentDialog.nativeElement.open) component.closeDialog();
    component.onDialogClosed();
  });
  it('opens every gift, including gifts without a target, and restores scroll', () => {
    const buttons: HTMLButtonElement[] = Array.from(fixture.nativeElement.querySelectorAll('article button'));
    expect(buttons.length).toBe(component.gifts.length);
    buttons.forEach((button, index) => {
      button.click(); fixture.detectChanges();
      expect(component.paymentDialog.nativeElement.open).toBeTrue();
      expect(fixture.nativeElement.querySelector('#payment-title').textContent).toContain(component.gifts[index].name);
      expect(document.body.style.overflow).toBe('hidden');
      component.closeDialog(); component.onDialogClosed();
      expect(document.body.style.overflow).not.toBe('hidden');
    });
  });
  it('uses the configured Mercado Pago link and real QR asset', () => {
    fixture.nativeElement.querySelector('article button').click(); fixture.detectChanges();
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('dialog a');
    expect(link.href).toBe('https://link.mercadopago.com.br/joaovianna');
    expect(link.rel).toContain('noopener');
    expect(fixture.nativeElement.querySelector('dialog img').getAttribute('src')).toBe('assets/images/pix-qrcode.svg');
  });
  it('copies the full Pix payload', async () => {
    const write = spyOn(navigator.clipboard, 'writeText').and.resolveTo();
    await component.copyPix(fixture.nativeElement.querySelector('textarea'));
    expect(write).toHaveBeenCalledWith(component.payment.pixCopyPaste);
    expect(component.copyMessage).toContain('copiado');
  });
  it('offers manual selection if clipboard access fails', async () => {
    spyOn(navigator.clipboard, 'writeText').and.rejectWith(new Error('denied'));
    const field: HTMLTextAreaElement = fixture.nativeElement.querySelector('textarea');
    const select = spyOn(field, 'select');
    await component.copyPix(field);
    expect(select).toHaveBeenCalled();
    expect(component.copyMessage).toContain('copie');
  });
});
