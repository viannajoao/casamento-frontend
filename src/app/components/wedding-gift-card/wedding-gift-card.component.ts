import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { GIFTS, GIFT_PAYMENT, WeddingGift } from './wedding-gifts.config';

@Component({ selector: 'app-wedding-gift-card', templateUrl: './wedding-gift-card.component.html', styleUrls: ['./wedding-gift-card.component.scss'] })

export class WeddingGiftCardComponent implements OnDestroy {
  @ViewChild('paymentDialog') paymentDialog!: ElementRef<HTMLDialogElement>;
  gifts = GIFTS;
  payment = GIFT_PAYMENT;
  selectedGift: WeddingGift | null = null;
  copyMessage = '';
  private previousOverflow = '';
  private trigger: HTMLElement | null = null;
  
  formatValue(value: number): string { return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value); }

  get cardLink(): string { return this.selectedGift?.link || this.payment.creditCardUrl; }
  openGift(gift: WeddingGift, event: Event): void {
    this.selectedGift = gift;
    this.copyMessage = '';
    this.trigger = event.currentTarget as HTMLElement;
    this.previousOverflow = document.body.style.overflow;
    this.paymentDialog.nativeElement.showModal();
    document.body.style.overflow = 'hidden';
  }


  closeDialog(): void { this.paymentDialog.nativeElement.close(); }
  onDialogClosed(): void {
    document.body.style.overflow = this.previousOverflow;
    this.selectedGift = null;
    this.trigger?.focus();
  }


  onBackdropClick(event: MouseEvent): void {
    if (event.target !== this.paymentDialog.nativeElement) return;
    const b = this.paymentDialog.nativeElement.getBoundingClientRect();
    if (event.clientX < b.left || event.clientX > b.right || event.clientY < b.top || event.clientY > b.bottom) this.closeDialog();
  }


  async copyPix(field: HTMLTextAreaElement): Promise<void> {
    const gift = this.selectedGift;
    try {
      await navigator.clipboard.writeText(this.payment.pixCopyPaste);
      if (gift === this.selectedGift) this.copyMessage = 'Código Pix copiado! Cole no aplicativo do seu banco.';
    } catch {
      if (gift !== this.selectedGift) return;
      field.focus(); field.select();
      this.copyMessage = 'Não foi possível copiar automaticamente. Selecione e copie o código acima.';
    }
  }

  onImageError(event: Event): void {
    const image = event.target as HTMLImageElement;
    if (image.getAttribute('src') !== 'assets/images/loading.jpg') image.src = 'assets/images/loading.jpg';
  }

  ngOnDestroy(): void {
    if (this.paymentDialog?.nativeElement.open) document.body.style.overflow = this.previousOverflow;
  }
}
