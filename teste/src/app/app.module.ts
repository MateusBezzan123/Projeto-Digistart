import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcuradoraComponent } from './calcuradora/calcuradora.component';
import { HistoricoComponent } from './historico/historico.component';
import { routing } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    CalcuradoraComponent,
    HistoricoComponent
  ],
  imports: [
    routing,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
