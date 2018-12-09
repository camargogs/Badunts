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

  rota:string;

  //para validar o formulário
  textError:boolean=false;
  inputErrorTitular:boolean=false;
  inputErrorNumero:boolean=false;
  inputErrorBandeira:boolean=false;
  inputErrorCod:boolean=false;
  inputErrorData:boolean=false;

  ngOnInit() {

  }

  validacaoFormulario() {
    //Titular
    if(this.titular == undefined){
      this.inputErrorTitular=true;
    }else{
      this.inputErrorTitular=false;
    }
    //Numero
    if(this.numero == undefined){
      this.inputErrorNumero=true;
    }else {
      this.inputErrorNumero=false;
    }
    //Bandeira
    if(this.bandeira == undefined){
      this.inputErrorBandeira=true;
    }else {
      this.inputErrorBandeira=false;
    }
    //Codigo
    if(this.cod == undefined){
      this.inputErrorCod=true;
    }else {
      this.inputErrorCod=false;
    }
    //Data
    if(this.data == undefined){
      this.inputErrorData=true;
    }else {
      this.inputErrorData=false;
    }
    //campos vazios
    if(this.titular==undefined || this.numero==undefined || this.bandeira==undefined || this.cod==undefined || this.data==undefined){
      this.textError=true;
    }else{
      this.textError=false;
    }
    if(this.inputErrorTitular || this.inputErrorNumero || this.inputErrorBandeira || this.inputErrorCod || this.inputErrorData){
      return false;
    }else{
      return true;
    }
  }

  cadCardPart4(titular,numero,bandeira,cod,data){
    if(this.validacaoFormulario()){
      console.log(this.rota);
      this.rota="/perfilContratante";
      console.log(this.rota);
    }
    console.log(titular);
    this.titular = titular;
    this.numero = numero;
    this.bandeira = bandeira;
    this.cod = cod;
    this.data = data;
    var user = JSON.parse(localStorage.getItem("contratante"));
    this.contratantes = JSON.parse(localStorage.getItem("contratantes"));
    if(this.contratantes==null){
      this.contratantes = [];
    }
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
