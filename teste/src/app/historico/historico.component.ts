import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  public resultado: string = "";
  public historico: string = "";

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.resultado = this.data.message;
    this.historico = this.data.completeMessage;
    if (this.resultado.trim() != "") {
      this.historico += this.resultado + "\r\n";
    }
  }

  public limparHistorico(): void {
    this.historico = "";
    this.data.completeMessage = "";
  }

  ngOnDestroy() {
    this.data.completeMessage = this.historico;
  }

}
