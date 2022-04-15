import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StickersPrivacyComponent } from './privacy/stickers-privacy/stickers-privacy.component';
import { CatStickersPrivacyComponent } from './privacy/cat-stickers-privacy/cat-stickers-privacy.component';
import { MemeStickersPrivacyComponent } from './privacy/meme-stickers-privacy/meme-stickers-privacy.component';
import { StickersTermsComponent } from './terms/stickers-terms/stickers-terms.component';
import { CatStickersTermsComponent } from './terms/cat-stickers-terms/cat-stickers-terms.component';
import { MemeStickersTermsComponent } from './terms/meme-stickers-terms/meme-stickers-terms.component';
import { InapppassTermsComponent } from './terms/inapppass-terms/inapppass-terms.component';
import { InapppassPrivacyComponent } from './privacy/inapppass-privacy/inapppass-privacy.component';
import { PectoPrivacyComponent } from './privacy/pecto-privacy/pecto-privacy.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StickersPrivacyComponent,
    CatStickersPrivacyComponent,
    MemeStickersPrivacyComponent,
    StickersTermsComponent,
    CatStickersTermsComponent,
    MemeStickersTermsComponent,
    InapppassTermsComponent,
    InapppassPrivacyComponent,
    PectoPrivacyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularTypewriterEffectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
