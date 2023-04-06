import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { OauthComponent } from './oauth/oauth.component';
import { OauthGuard } from './oauth/oauth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-PE';
registerLocaleData(localeEs);

const routes: Routes = [
  {
    path: 'oauth2',
    component: OauthComponent,
  },
  /*{
    path: 'oauth2/callback',
    component: Oauth2CallbackComponent,
  },*/
];

@NgModule({
  declarations: [OauthComponent, LayoutComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [OauthGuard],
})
export class CoreModule {}
