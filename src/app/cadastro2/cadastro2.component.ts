import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro2',
  templateUrl: './cadastro2.component.html',
  styleUrls: ['../cadastro/cadastro.component.css']
})
export class Cadastro2Component implements OnInit {

  constructor() { }
  rg:string;
  cpf:string;
  cidade:string;
  endereco: string;
  cep: number;
  active1:boolean;
  active2:boolean;
  rota1:string;
  rota2:string;

  //para validar o formulário
  textError:boolean=false;
  inputErrorRG:boolean=false;
  inputErrorCPF:boolean=false;
  inputErrorCidade:boolean=false;
  inputErrorEnd:boolean=false;
  inputErrorCEP:boolean=false;

  ngOnInit() {
    if(localStorage.getItem("musico")){
      this.active1 = false;
      this.active2 = true;
    }
    else{
      this.active1 = true;
      this.active2 = false;
    }
    var user = JSON.parse(localStorage.getItem("musico"));
    var con =  JSON.parse(localStorage.getItem("contratante"));  
    if(user!=null){
      this.rg = user.rg;
      this.cpf = user.cpf;
      this.cidade = user.cidade;
      this.endereco = user.endereco;
      if(user.cep!=0){
       this.cep = user.cep;
    }
    }
    if(con!=null){
      this.rg = con.rg;
      this.cpf = con.cpf;
      this.cidade = con.cidade;
      this.endereco = con.endereco;
      if(con.cep!=0){
        this.cep = con.cep;
      }
      
    }
  }

  validacaoFormulario() {
    console.log(this.rg+"RG");
    //RG
    if(this.rg == "" || this.rg == null){
      this.inputErrorRG=true;
    }else{
      this.inputErrorRG=false;
    }
    //CPF
    if(this.cpf == "" || this.cpf == null){
      this.inputErrorCPF=true;
    }else {
      this.inputErrorCPF=false;
    }
    //Cidade
    if(this.cidade == "" || this.cidade == null){
      this.inputErrorCidade=true;
    }else {
      this.inputErrorCidade=false;
    }
    //Endereço
    if(this.endereco == "" || this.endereco == null){
      this.inputErrorEnd=true;
    }else {
      this.inputErrorEnd=false;
    }
    //CEP
    if(this.cep == undefined){
      this.inputErrorCEP=true;
    }else {
      this.inputErrorCEP=false;
    }
    //campos vazios
    if(this.rg==""|| this.rg == null || this.cpf==""|| this.cpf == null || this.cidade==""|| this.cidade == null || this.endereco=="" || this.endereco == null || this.cep==undefined){
      this.textError=true;
    }else{
      this.textError=false;
    }
    if(this.inputErrorRG || this.inputErrorCPF || this.inputErrorCidade || this.inputErrorEnd || this.inputErrorCEP){
      return false;
    }else{
      return true;
    }
  }

  cardPart2(rg,cpf,cidade,endereco,cep){

    if(this.validacaoFormulario()){
      console.log(this.rota1);
      console.log(this.rota2);
      this.rota1="/cadastrar3musi";
      this.rota2="/cadastrar3contra";
      console.log(this.rota1);
      console.log(this.rota2);
    }

    if(localStorage.getItem("musico")){
      var user = JSON.parse(localStorage.getItem("musico"));
      user.rg = rg;
      user.cpf = cpf;
      user.cidade = cidade;
      user.endereco = endereco;
      user.cep = cep;
      localStorage.setItem("musico", JSON.stringify(user));
    }
    if(localStorage.getItem("contratante")){
      var user = JSON.parse(localStorage.getItem("contratante"));
      user.rg = rg;
      user.cpf = cpf;
      user.cidade = cidade;
      user.endereco = endereco;
      user.cep = cep;
      localStorage.setItem("contratante", JSON.stringify(user));
    }
    
  }

}
