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

  rota:string;

  //para validar o formulário
  textError:boolean=false;
  inputErrorTitular:boolean=false;
  inputErrorBandeira:boolean=false;
  inputErrorNumero:boolean=false;
  inputErrorAgencia:boolean=false;


  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("musico"));
    console.log(user);
  }

  validacaoFormulario() {
    console.log(this.titular + "Titular")
    //Titular
    if(this.titular == undefined){
      this.inputErrorTitular=true;
    }else{
      this.inputErrorTitular=false;
    }
    //Bandeira
    if(this.bandeira == undefined){
      this.inputErrorBandeira=true;
    }else {
      this.inputErrorBandeira=false;
    }
    //Numero
    if(this.numero == undefined){
      this.inputErrorNumero=true;
    }else {
      this.inputErrorNumero=false;
    }
    //Agência
    if(this.agencia == undefined){
      this.inputErrorAgencia=true;
    }else {
      this.inputErrorAgencia=false;
    }
    //campos vazios
    if(this.titular==undefined || this.numero==undefined || this.bandeira==undefined || this.agencia==undefined){
      this.textError=true;
    }else{
      this.textError=false;
    }
    if(this.inputErrorTitular || this.inputErrorNumero || this.inputErrorBandeira || this.inputErrorAgencia){
      return false;
    }else{
      return true;
    }
  }

  cardPart4(titular,bandeira,numero,agencia){
    var user = JSON.parse(localStorage.getItem("musico"));
    this.conta.titular = titular;
    this.conta.bandeira = bandeira;
    this.conta.numero = numero;
    this.conta.agencia = agencia;
    user.cartao = numero;
    user.musicoId = this.musicos.length;
    this.musicos.push(user);
    var u = [];
    
    if(this.validacaoFormulario()){
      u.push(user);
      console.log(u);
      localStorage.setItem("musicos", JSON.stringify(u));
      localStorage.setItem("atual", JSON.stringify(user));
      localStorage.setItem("contas", JSON.stringify(this.contas));
      if(localStorage.getItem("atual")){
        this.rota="/perfilMusico";
      }
    }
    this.musicos = JSON.parse(localStorage.getItem("musicos"));
    if(this.musicos==null){
      this.musicos = [];
    }
    
  }
}