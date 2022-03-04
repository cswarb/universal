import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { APP_BASE_HREF, isPlatformBrowser } from '@angular/common';
import { RequestService } from './request/request.service';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'portal' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserTransferStateModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  providers: [
    RequestService,
    { provide: APP_BASE_HREF, useValue: '' },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
