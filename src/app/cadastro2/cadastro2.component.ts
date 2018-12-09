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

  cardPart2(rg,cpf,cidade,endereco,cep){

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
