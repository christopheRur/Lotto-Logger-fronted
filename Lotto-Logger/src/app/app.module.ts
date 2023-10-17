import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LottoLoggerComponent } from './components/lotto-logger/lotto-logger.component';

@NgModule({
  declarations: [
    AppComponent,
    LottoLoggerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
