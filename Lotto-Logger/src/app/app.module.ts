import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LottoLoggerComponent } from './components/lotto-logger/lotto-logger.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LottoLoggerComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    RouterModule.forRoot([{path:'lotto-logger',component: LottoLoggerComponent},
  ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
