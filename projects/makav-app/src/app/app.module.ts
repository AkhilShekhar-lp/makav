import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MakavModule } from 'makav';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MakavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
