import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TryComponent } from './try/try.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselTOPComponent } from './carousel-top/carousel-top.component';
import { MenucardimgComponent } from './menucardimg/menucardimg.component';
import { NumberandtextComponent } from './numberandtext/numberandtext.component';
import { ImagecardComponent } from './imagecard/imagecard.component';
import { ImgsectionComponent } from './imgsection/imgsection.component';
import { RedandBlackboxComponent } from './redand-blackbox/redand-blackbox.component';
import { RedandblackComponent } from './redandblack/redandblack.component';
import { CarouselandvideoComponent } from './carouselandvideo/carouselandvideo.component';
import { FootersectionComponent } from './footersection/footersection.component';
import { NavbarOGComponent } from './navbar-og/navbar-og.component';
import { MenucardimgOGComponent } from './menucardimg-og/menucardimg-og.component';
import { RedandBlackboxOGComponent } from './redand-blackbox-og/redand-blackbox-og.component';
import { CarouselandvideoOGComponent } from './carouselandvideo-og/carouselandvideo-og.component';
import { FootersectionOGComponent } from './footersection-og/footersection-og.component';
import { OnetryComponent } from './onetry/onetry.component';
import { ParatwoComponent } from './paratwo/paratwo.component';

@NgModule({
  declarations: [
    AppComponent,
    TryComponent,
    NavbarComponent,
    CarouselTOPComponent,
    MenucardimgComponent,
    NumberandtextComponent,
    ImagecardComponent,
    ImgsectionComponent,
    RedandBlackboxComponent,
    RedandblackComponent,
    CarouselandvideoComponent,
    FootersectionComponent,
    NavbarOGComponent,
    MenucardimgOGComponent,
    RedandBlackboxOGComponent,
    CarouselandvideoOGComponent,
    FootersectionOGComponent,
    OnetryComponent,
    ParatwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
