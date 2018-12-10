import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro3-contratante',
  templateUrl: './cadastro3-contratante.component.html',
  styleUrls: ['../cadastro/cadastro.component.css']
})
export class Cadastro3ContratanteComponent implements OnInit {

  constructor() { }

  //para validar o formulário
  textError:boolean=false;
  inputErrorEstab:boolean=false;
  inputErrorPublico:boolean=false;

  rota:String;

  estabelecimento: String;
  publico: number;

  ngOnInit() {
    var con =  JSON.parse(localStorage.getItem("contratante")); 
    this.estabelecimento = con.estabelecimento;
    if(con.publico!=0){
      this.publico = con.publico;
    }
  }
  
  validacaoFormulario() {
    //NOME ESTABELECIMENTO
    if(this.estabelecimento == null || this.estabelecimento == "" ){
      this.inputErrorEstab=true;
    }else{
      this.inputErrorEstab=false;
    }
    //MÉDIA DE PÚBLICO
    if(this.publico == undefined){
      this.inputErrorPublico=true;
    }else {
      this.inputErrorPublico=false;
    }
    //campos vazios
    if(this.estabelecimento==null || this.estabelecimento == "" || this.publico==undefined ){
      this.textError=true;
    }else{
      this.textError=false;
    }
    if(this.inputErrorEstab || this.inputErrorPublico){
      return false;
    }else{
      return true;
    }
  }

  contraPart3(estabelecimento,publico){
    if(this.validacaoFormulario()){
      console.log(this.rota);
      this.rota="/cadastrar4contra";
      console.log(this.rota);
      var user = JSON.parse(localStorage.getItem("contratante"));
      user.estabelecimento = this.estabelecimento;
      user.publico = this.publico;
      localStorage.setItem("contratante", JSON.stringify(user));
    }
  }

}
