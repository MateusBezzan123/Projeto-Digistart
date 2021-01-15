import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcuradoraComponent } from './calcuradora/calcuradora.component';
import { HistoricoComponent } from './historico/historico.component';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "calculadora", component: CalcuradoraComponent },
  { path: "historico", component: HistoricoComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CalcuradoraComponent,
    HistoricoComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
