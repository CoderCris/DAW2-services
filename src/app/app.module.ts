import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RawTextComponent } from './raw-text/raw-text.component';
import { EncTextComponent } from './enc-text/enc-text.component';
import { CodedTextComponent } from './coded-text/coded-text.component';

@NgModule({
  declarations: [
    AppComponent,
    RawTextComponent,
    EncTextComponent,
    CodedTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
