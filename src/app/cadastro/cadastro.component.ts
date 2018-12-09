import {Contratante}from './../models/contratante.model';

import {Musico}from './../models/musico.model';

import {Component, OnInit}from '@angular/core';
import { RouterLink } from '@angular/router';


@Component( {
  selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
}

) export class CadastroComponent implements OnInit {

  constructor() {}

  active1=true;
  active2=false;

  //para validar o formulário
  textErrorVazio:boolean=false;
  inputErrorNome:boolean=false;
  textErrorEmail:boolean=false;
  inputErrorEmail:boolean=false;
  textErrorSenha:boolean=false;
  inputErrorSenha:boolean=false;
  confirmaSenha: String;


  rota: string="/cadastrar";

  contratante: Contratante= {
    "contratanteId": 0, "nome": "", "usuario": "", "email": "", "senha": "", "avaliacao": 0, "carteiraID": "", "rg":"", "cpf": "", "cidade":"", "endereco":"", "cep":0, "estabelecimento":"", "publico":0, "cartao":0
  };

  musico: Musico= {
    "musicoId": 0, "nome": "", "usuario": "", "email": "", "senha": "", "carteiraId": "", "avaliacao": 0, "agendaId": "", "rg":"", "cpf": "", "cidade":"", "endereco":"", "cep":0, "genero":[], "tipo":"", "conta": 0, "video":"", "audio":"", "descricao":"", "foto":"", "letras":"", "nome_show":"", "hora_preco":0, "detalhe_show": ""
  };

  nome: String;
  email: String;
  senha: String;


  ngOnInit() {}

  toggleBtn1() {
    this.active1=true;
    this.active2=false;
  }

  toggleBtn2() {
    this.active1=false;
    this.active2=true;
  }

  validacaoFormulario() {
    //nome
    if(this.nome == undefined){
      this.inputErrorNome=true;
    }else{
      this.inputErrorNome=false;
    }
    //email
    if(this.email != undefined){
      let endereco=this.email.substring(0, this.email.indexOf("@"));
      let dominio=this.email.substring(this.email.indexOf("@")+ 1, this.email.length);
      
      if ((endereco.length >=1) && 
      (dominio.length >=3) && 
      (endereco.search("@")==-1) && 
      (dominio.search("@")==-1) && 
      (endereco.search(" ")==-1) && 
      (dominio.search(" ")==-1) && 
      (dominio.search(".") !=-1) && 
      (dominio.indexOf(".") >=1)&& 
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
        this.textErrorEmail=false;
        this.inputErrorEmail=false;
      }else {
        this.textErrorEmail=true;
        this.inputErrorEmail=true;
      }
    }else {
      this.textErrorEmail=true;
      this.inputErrorEmail=true;
    }
    //senha
    if(this.senha != undefined){
      if(this.senha == this.confirmaSenha) {
        this.textErrorSenha=false;
        this.inputErrorSenha=false;
      } else {
        this.textErrorSenha=true;
        this.inputErrorSenha=true;
      }
    }else{
      this.inputErrorSenha=true;
    }
    //campos vazios
    if(this.nome==undefined || this.email==undefined || this.senha==undefined){
      this.textErrorVazio=true;
    }else{
      this.textErrorVazio=false;
    }
    if(this.inputErrorNome || this.inputErrorEmail || this.inputErrorSenha){
      return false;
    }else{
      return true;
    }
  }

  cadPart1(nome, email, senha) {

    // this.nome = nome;
    // this.email = email;
    // this.senha = senha;
    if(this.validacaoFormulario()){
      console.log(this.rota);
      this.rota="/cadastrar2";
      console.log(this.rota);
    }
    if(this.active1) {
      this.musico.nome=nome;
      this.musico.email=email;
      this.musico.senha=senha;
      localStorage.setItem("musico", JSON.stringify(this.musico));
      localStorage.removeItem("contratante");
    }

    if(this.active2) {
      this.contratante.nome=nome;
      this.contratante.email=email;
      this.contratante.senha=senha;
      localStorage.setItem("contratante", JSON.stringify(this.contratante));
      localStorage.removeItem("musico");
    }
  }
}
