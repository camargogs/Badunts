import { Musico } from './../models/musico.model';
import { Conta } from './../models/conta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro4-musico',
  templateUrl: './cadastro4-musico.component.html',
  styleUrls: ['../cadastro/cadastro.component.css']
})
export class Cadastro4MusicoComponent implements OnInit {

  constructor() { }
  contas: Conta[] = [];
  musicos: Musico [] = [];
  conta: Conta =  
  { "titular": "", "bandeira": "", "numero": 0, "agencia": 0};
  titular:string;
  bandeira:string;
  numero:number;
  agencia:number;

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("musico"));
    console.log(user);
  }

  cardPart4(titular,bandeira,numero,agencia){
    var user = JSON.parse(localStorage.getItem("musico"));
    this.conta.titular = titular;
    this.conta.bandeira = bandeira;
    this.conta.numero = numero;
    this.conta.agencia = agencia;
    user.cartao = numero;
    this.contas.push(this.conta);
    this.musicos.push(user);
    localStorage.setItem("musicos", JSON.stringify(this.musicos));
    localStorage.setItem("atual", JSON.stringify(user));
    localStorage.setItem("contas", JSON.stringify(this.contas));
  }
}