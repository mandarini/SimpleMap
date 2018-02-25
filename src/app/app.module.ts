import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadScriptService } from './load-script.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoadScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
