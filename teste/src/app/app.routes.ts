import { Routes, RouterModule } from '@angular/router'
import { CalcuradoraComponent } from './calcuradora/calcuradora.component'
import { HistoricoComponent } from './historico/historico.component'


const appRoutes: Routes = [
  { path: "calculadora", component: CalcuradoraComponent },
  { path: "historico", component: HistoricoComponent },
]

export const routing = RouterModule.forRoot(appRoutes)
