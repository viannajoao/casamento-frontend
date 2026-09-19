import { Component } from '@angular/core';

interface WeddingGift {
  name: string;
  image: string;
  description: string;
  value: number | null;
  link: string | null;
}

@Component({
  selector: 'app-wedding-gift-card',
  templateUrl: './wedding-gift-card.component.html',
  styleUrls: ['./wedding-gift-card.component.scss']
})
export class WeddingGiftCardComponent {

  gifts: WeddingGift[] = [
    {
      name: 'Gift Card 1',
      image: 'assets/images/gift-card-1.jpg',
      description: 'Ajude no Upgrade do PC do noivo!',
      value: 150,
      link: null
    },
    {
      name: 'Gift Card 2',
      image: 'assets/images/kiko-bebendo.jpg',
      description: 'Bebidas para a festa!',
      value: null,
      link: null
    },
    {
      name: 'Gift Card 3',
      image: 'assets/images/gift-card-3.jpg',
      description: 'Description for Gift Card 3',
      value: null,
      link: null
    }
  ];

}
