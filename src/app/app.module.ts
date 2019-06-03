import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoireComponent } from './composants/histoire/histoire.component';
import { HeaderComponent } from './composants/header/header.component';
import { GeographieComponent } from './composants/geographie/geographie.component';
import { PolitiqueComponent } from './composants/politique/politique.component';
import { EconomieComponent } from './composants/economie/economie.component';
import { CultureComponent } from './composants/culture/culture.component';
import { CodePipe } from './code.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HistoireComponent,
    HeaderComponent,
    GeographieComponent,
    PolitiqueComponent,
    EconomieComponent,
    CultureComponent,
    CodePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
