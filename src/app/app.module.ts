import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NuntCmsModule, NuntCoreModule} from '@nunt/core';
import {NuntDesignModule} from '@nunt/design';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NuntCoreModule.forRoot({
      host: 'https://stage.nunt.io',
      apiUrl: 'https://stage.nunt.io'
    }),
    NuntCmsModule.forRoot(),
    NuntDesignModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
