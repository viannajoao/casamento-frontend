import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerStartComponent } from './components/banner-start/banner-start.component';
import { WeddingCountdownComponent } from './components/wedding-countdown/wedding-countdown.component';
import { WeddingGiftCardComponent } from './components/wedding-gift-card/wedding-gift-card.component';
import { WeddingNavigationComponent } from './components/wedding-navigation/wedding-navigation.component';
import { OurHistoryComponent } from './components/our-history/our-history.component';
import { WeddingCeremonyComponent } from './components/wedding-ceremony/wedding-ceremony.component';
import { WeddingReceptionComponent } from './components/wedding-reception/wedding-reception.component';
import { WeddingContactComponent } from './components/wedding-contact/wedding-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerStartComponent,
    WeddingCountdownComponent,
    WeddingGiftCardComponent,
    WeddingNavigationComponent,
    OurHistoryComponent,
    WeddingCeremonyComponent,
    WeddingReceptionComponent,
    WeddingContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
