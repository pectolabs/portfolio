import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatStickersPrivacyComponent } from './privacy/cat-stickers-privacy/cat-stickers-privacy.component';
import { InapppassPrivacyComponent } from './privacy/inapppass-privacy/inapppass-privacy.component';
import { MemeStickersPrivacyComponent } from './privacy/meme-stickers-privacy/meme-stickers-privacy.component';
import { PectoPrivacyComponent } from './privacy/pecto-privacy/pecto-privacy.component';
import { StickersPrivacyComponent } from './privacy/stickers-privacy/stickers-privacy.component';
import { CatStickersTermsComponent } from './terms/cat-stickers-terms/cat-stickers-terms.component';
import { MemeStickersTermsComponent } from './terms/meme-stickers-terms/meme-stickers-terms.component';
import { StickersTermsComponent } from './terms/stickers-terms/stickers-terms.component';
import { InapppassTermsComponent } from './terms/inapppass-terms/inapppass-terms.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'privacy',
    component: PectoPrivacyComponent
  },
  {
    path: 'stickers',
    children: [
      {
        path: 'privacy',
        component: StickersPrivacyComponent
      },
      {
        path: 'terms',
        component: StickersTermsComponent
      }
    ]
  },
  {
    path: 'catstickerz',
    children: [
      {
        path: 'privacy',
        component: CatStickersPrivacyComponent
      },
      {
        path: 'terms',
        component: CatStickersTermsComponent
      }
    ]
  },
  {
    path: 'memestickers',
    children: [
      {
        path: 'privacy',
        component: MemeStickersPrivacyComponent
      },
      {
        path: 'terms',
        component: MemeStickersTermsComponent
      }
    ]
  },
  {
    path: 'inapppass',
    children: [
      {
        path: 'privacy',
        component: InapppassPrivacyComponent
      },
      {
        path: 'terms',
        component: InapppassTermsComponent
      }
    ]
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
