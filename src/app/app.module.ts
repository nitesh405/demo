import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { PopupComponent } from './components/popup/popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DilogueComponent } from './components/dilogue/dilogue.component';
@NgModule({
  declarations: [
    AppComponent,
    IndicatorComponent,
    PopupComponent,
    DilogueComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
