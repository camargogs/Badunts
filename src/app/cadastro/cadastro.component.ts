import { Contratante } from './../models/contratante.model';
import { Musico } from './../models/musico.model';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }
  active1 = true;
  active2 = false;
  contratante: Contratante ={
    "contratanteId":0,"nome": "", "usuario": "", "email": "", "senha": "", "avaliacao": 0, "carteiraID": "", "rg":"", "cpf": "","cidade":"","endereco":"","cep":0,"estabelecimento":"","publico":0,"cartao":0,"video":"","audio":"","descricao":"","foto":"","letras":""}
  musico: Musico =  
    { "musicoId": 0, "nome": "", "usuario": "", "email": "", "senha": "", "carteiraId": "", "avaliacao": 0, "agendaId": "","rg":"", "cpf": "","cidade":"","endereco":"","cep":0,"genero":[], "tipo":"", "conta": 0,"video":"","audio":"","descricao":"","foto":"","letras":"","nome_show":"","hora_preco":0,"detalhe_show": ""};
  
  nome: String;
  email: String;
  senha: String;
  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("musico"));
    var con =  JSON.parse(localStorage.getItem("contratante"));  
    if(user!=null){
      this.nome = user.nome;
      this.email = user.email;
      this.senha = user.senha;
    }
    if(con!=null){
      this.nome = con.nome;
      this.email = con.email;
      this.senha = con.senha;
    }
  }
  toggleBtn1(){
    this.active1 = true;
    this.active2 = false;
  }
  toggleBtn2(){
    this.active1 = false;
    this.active2 = true;
  }
  cadPart1(nome,email,senha){
    // this.nome = nome;
    // this.email = email;
    // this.senha = senha;
    if(this.active1){
      this.musico.nome = nome;
      this.musico.email = email;
      this.musico.senha = senha;
      localStorage.setItem("musico", JSON.stringify(this.musico));
      localStorage.removeItem("contratante");
    }
    if(this.active2){
      this.contratante.nome = nome;
      this.contratante.email = email;
      this.contratante.senha = senha;
      localStorage.setItem("contratante", JSON.stringify(this.contratante));
      localStorage.removeItem("musico");
    }
  }
}
