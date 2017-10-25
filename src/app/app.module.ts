import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9uD86F5Js5TERvEQmX7WYsV1N3Sp5VWQ' // shouldn't be in git :)
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
