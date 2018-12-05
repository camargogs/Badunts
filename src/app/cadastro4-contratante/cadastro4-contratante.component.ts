import { Contratante } from './../models/contratante.model';
import { Cartao } from './../models/cartao.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro4-contratante',
  templateUrl: './cadastro4-contratante.component.html',
  styleUrls: ['../cadastro/cadastro.component.css']
})
export class Cadastro4ContratanteComponent implements OnInit {

  constructor() { }
  cartao: Cartao = {
    "titular":"","numero":0,"bandeira":"","cod":0,"data":0 
  };
  cartaos: Cartao[] = [];
  contratantes: Contratante[] = [];
  titular: string;
  numero: number;
  bandeira: string;
  cod: number;
  data: number;
  ngOnInit() {

  }

  cadCardPart4(titular,numero,bandeira,cod,data){
    console.log(titular);
    this.titular = titular;
    this.numero = numero;
    this.bandeira = bandeira;
    this.cod = cod;
    this.data = data;
    var user = JSON.parse(localStorage.getItem("contratante"));
    user.cartao = numero;
    this.cartao.titular = titular;
    this.cartao.numero = numero;
    this.cartao.bandeira = bandeira;
    this.cartao.cod = cod;
    this.cartao.data = data;
    this.contratantes.push(user);
    this.cartaos.push(this.cartao);
    localStorage.setItem("atual", JSON.stringify(user));
    localStorage.setItem("contratantes", JSON.stringify(this.contratantes));
    localStorage.setItem("cartaos", JSON.stringify(this.cartaos));
  }

}
