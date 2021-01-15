import { Component, OnInit } from '@angular/core';
import { ValidacaoService } from "../validacao.service";
import { DataService } from "../data.service";
@Component({
  selector: 'app-calcuradora',
  templateUrl: './calcuradora.component.html',
  styleUrls: ['./calcuradora.component.css']
})
export class CalcuradoraComponent implements OnInit {

  constructor(private validacao: ValidacaoService, private data: DataService) {}

  public resultado: string = "";
  public operacao: string = "";
  public historico: string = "";

  ngOnInit(): void {
    this.historico = this.data.completeMessage;
  }

  ngOnDestroy() {
    this.data.message = this.operacao;
    this.data.completeMessage = this.historico;
  }

  //limpa o resultado
  limpar() {
    this.resultado = "";
  }
  //Verifica se o caractere passado é um operador

  public montarResultado(digito: string): void {
    if (this.validacao.ehValidaExpressao(digito, this.resultado)) {
      this.resultado += digito;
    }
  }

  public finalizar(): void {
    let vetorBin = this.resultado.split("+,-,*,%");
    let soma: number = 0;
    vetorBin.forEach((element) => {
      soma += parseInt(element, 2);
      this.operacao += element + "+";
    });
    this.resultado = parseInt(soma.toString(), 10).toString(2);
    this.operacao =
      this.operacao.substring(0, this.operacao.length - 1) +
      "=" +
      this.resultado;
  }
}
