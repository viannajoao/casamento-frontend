import { Component } from '@angular/core';

@Component({
  selector: 'app-wedding-navigation',
  templateUrl: './wedding-navigation.component.html',
  styleUrls: ['./wedding-navigation.component.scss']
})
export class WeddingNavigationComponent {

  isMenuOpen: boolean = false;

  toggleMenu(): void {
  this.isMenuOpen = !this.isMenuOpen;
}
  closeMenu(): void {
  this.isMenuOpen = false;
}

}
